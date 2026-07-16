import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { Client } from "pg";

const SNAPSHOT_TABLES = [
  "users",
  "workspaces",
  "workspace_members",
  "user_preferences",
  "accounts",
  "credit_cards",
  "templates",
  "history_records",
  "credit_card_payment_history",
  "pending_expenses",
  "payment_carryovers",
  "app_settings",
  "workspace_invites",
  "telegram_connections",
  "telegram_link_tokens",
  "telegram_notification_preferences",
  "telegram_notification_deliveries",
];

const ENV_FILES = [".env.local", ".env"];

const readEnvFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine.startsWith("#")) {
        continue;
      }

      const separatorIndex = trimmedLine.indexOf("=");
      if (separatorIndex <= 0) {
        continue;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      let value = trimmedLine.slice(separatorIndex + 1).trim();

      if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
};

const loadDatabaseUrl = async () => {
  for (const fileName of ENV_FILES) {
    await readEnvFile(path.resolve(process.cwd(), fileName));
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set. Add it to the environment or .env.local before running db:snapshot.");
  }

  return databaseUrl;
};

const quoteIdentifier = (value) => `"${value.replaceAll("\"", "\"\"")}"`;

const getTableColumns = async (client, tableName) => {
  const result = await client.query(
    `
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
      ORDER BY ordinal_position
    `,
    [tableName]
  );

  return result.rows.map((row) => row.column_name);
};

const getPrimaryKeyColumns = async (client, tableName) => {
  const result = await client.query(
    `
      SELECT a.attname AS column_name
      FROM pg_index i
      JOIN pg_class t ON t.oid = i.indrelid
      JOIN pg_namespace n ON n.oid = t.relnamespace
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(i.indkey)
      WHERE i.indisprimary
        AND n.nspname = 'public'
        AND t.relname = $1
      ORDER BY array_position(i.indkey, a.attnum)
    `,
    [tableName]
  );

  return result.rows.map((row) => row.column_name);
};

const fetchTableSnapshot = async (client, tableName) => {
  const columns = await getTableColumns(client, tableName);

  if (columns.length === 0) {
    return null;
  }

  const primaryKeyColumns = await getPrimaryKeyColumns(client, tableName);
  const orderByClause =
    primaryKeyColumns.length > 0
      ? ` ORDER BY ${primaryKeyColumns.map((column) => quoteIdentifier(column)).join(", ")}`
      : "";

  const rowCountResult = await client.query(`SELECT COUNT(*)::int AS count FROM ${quoteIdentifier(tableName)}`);
  const rowsResult = await client.query(`SELECT * FROM ${quoteIdentifier(tableName)}${orderByClause}`);
  const nullWorkspaceCount =
    columns.includes("workspaceId")
      ? await client.query(
          `SELECT COUNT(*)::int AS count FROM ${quoteIdentifier(tableName)} WHERE ${quoteIdentifier("workspaceId")} IS NULL`
        )
      : null;

  return {
    table: tableName,
    rowCount: rowCountResult.rows[0]?.count ?? 0,
    nullWorkspaceCount: nullWorkspaceCount?.rows[0]?.count ?? null,
    columns,
    rows: rowsResult.rows,
  };
};

const main = async () => {
  const databaseUrl = await loadDatabaseUrl();
  const client = new Client({
    connectionString: databaseUrl,
    application_name: "my-financial-dashboard-db-snapshot",
  });

  await client.connect();

  try {
    await client.query("BEGIN");
    await client.query("SET TRANSACTION ISOLATION LEVEL REPEATABLE READ, READ ONLY");

    const tableSnapshots = [];
    for (const tableName of SNAPSHOT_TABLES) {
      const snapshot = await fetchTableSnapshot(client, tableName);
      if (snapshot) {
        tableSnapshots.push(snapshot);
      }
    }

    await client.query("COMMIT");

    const timestamp = new Date().toISOString().replaceAll(":", "-");
    const outputDir = path.resolve(process.cwd(), "backups");
    const outputPath = path.join(outputDir, `db-snapshot-${timestamp}.json`);

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(
      outputPath,
      JSON.stringify(
        {
          createdAt: new Date().toISOString(),
          tables: tableSnapshots,
        },
        null,
        2
      )
    );

    const summary = tableSnapshots
      .map((table) => `${table.table}: ${table.rowCount} rows${table.nullWorkspaceCount == null ? "" : `, ${table.nullWorkspaceCount} null workspaceId`}`)
      .join("\n");

    console.log(`Snapshot written to ${outputPath}`);
    console.log(summary);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
};

main().catch((error) => {
  console.error("Failed to create database snapshot.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
