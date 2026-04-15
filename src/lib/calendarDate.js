const pad = (value) => String(value).padStart(2, "0");

export const parseDateOnlyString = (value) => {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0, 0));
};

export const normalizeCalendarDate = (value) => {
  if (!value) return null;

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return parseDateOnlyString(value);
  }

  const parsedValue = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsedValue.getTime())) {
    return null;
  }

  return new Date(
    Date.UTC(
      parsedValue.getUTCFullYear(),
      parsedValue.getUTCMonth(),
      parsedValue.getUTCDate(),
      12,
      0,
      0,
      0
    )
  );
};

export const formatCalendarDateForInput = (value) => {
  const normalizedDate = normalizeCalendarDate(value);
  if (!normalizedDate) return "";

  return [
    normalizedDate.getUTCFullYear(),
    pad(normalizedDate.getUTCMonth() + 1),
    pad(normalizedDate.getUTCDate()),
  ].join("-");
};

export const getCalendarDateKey = (value) => formatCalendarDateForInput(value);

export const formatCalendarDateLabel = (value, options, locale = "en-US") => {
  const normalizedDate = normalizeCalendarDate(value);
  if (!normalizedDate) return "";

  return new Intl.DateTimeFormat(locale, {
    timeZone: "UTC",
    ...options,
  }).format(normalizedDate);
};
