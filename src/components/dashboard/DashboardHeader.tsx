type DashboardHeaderProps = {
  userDisplayName: string;
  workspaceName?: string | null;
};

export default function DashboardHeader({ userDisplayName, workspaceName }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Hola, {userDisplayName}</h1>
        <p className="text-muted-foreground">Proyeccion de flujo de caja para las proximas cuatro semanas.</p>
      </div>

      {workspaceName ? (
        <div className="inline-flex w-fit items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
          Workspace activo: <span className="ml-1 font-semibold text-foreground">{workspaceName}</span>
        </div>
      ) : null}
    </div>
  );
}
