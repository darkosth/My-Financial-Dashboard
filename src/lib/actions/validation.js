import { normalizeCalendarDate, parseDateOnlyString } from "@/lib/calendarDate";

const MAX_MONEY_AMOUNT = 100_000_000;
const FREQUENCIES = new Set(["WEEKLY", "BIWEEKLY", "MONTHLY", "YEARLY"]);
const CATEGORIES = new Set([
  "HOUSING",
  "TRANSPORTATION",
  "FOOD",
  "UTILITIES",
  "INSURANCE",
  "MEDICAL",
  "SAVINGS",
  "PERSONAL",
  "ENTERTAINMENT",
  "SUBSCRIPTIONS",
  "DEBT",
  "OTHER",
]);

export class ValidationError extends Error {}

const readFieldValue = (formData, field) => formData.get(field)?.toString();

export const parseRequiredText = (value, label = "Value", { maxLength = 120 } = {}) => {
  const normalizedValue = value?.toString().trim();

  if (!normalizedValue) {
    throw new ValidationError(`${label} is required`);
  }

  if (normalizedValue.length > maxLength) {
    throw new ValidationError(`${label} is too long`);
  }

  return normalizedValue;
};

export const parseOptionalText = (value, label = "Value", { maxLength = 160, fallback = null } = {}) => {
  if (value == null) {
    return fallback;
  }

  const normalizedValue = value.toString().trim();

  if (!normalizedValue) {
    return fallback;
  }

  if (normalizedValue.length > maxLength) {
    throw new ValidationError(`${label} is too long`);
  }

  return normalizedValue;
};

export const getRequiredText = (formData, field, label = field, options) => {
  const value = readFieldValue(formData, field);
  return parseRequiredText(value, label, options);
};

export const parseMoneyAmount = (value, label = "Amount", { min = 0, allowZero = true } = {}) => {
  if (value == null || value === "") {
    throw new ValidationError(`${label} is required`);
  }

  const amount = Number.parseFloat(value);
  const lowerBound = allowZero ? min : Math.max(min, Number.EPSILON);

  if (!Number.isFinite(amount) || amount < lowerBound || amount > MAX_MONEY_AMOUNT) {
    throw new ValidationError(`${label} must be a valid amount`);
  }

  return Math.round(amount * 100) / 100;
};

export const parseOptionalMoneyAmount = (value, label = "Amount", { fallback = null, ...options } = {}) => {
  if (value == null || value === "") {
    return fallback;
  }

  return parseMoneyAmount(value, label, options);
};

export const getMoneyAmount = (formData, field, label = field, options) => {
  const rawValue = readFieldValue(formData, field);
  return parseMoneyAmount(rawValue, label, options);
};

export const getOptionalMoneyAmount = (formData, field, label = field, fallback = null) => {
  const rawValue = readFieldValue(formData, field);
  return parseOptionalMoneyAmount(rawValue, label, { fallback });
};

export const parsePercentage = (value, label = "Percentage", { min = 0, max = 100 } = {}) => {
  const percentage = Number.parseFloat(value);

  if (!Number.isFinite(percentage) || percentage < min || percentage > max) {
    throw new ValidationError(`${label} must be between ${min} and ${max}`);
  }

  return percentage;
};

export const parseOptionalPercentage = (value, label = "Percentage", options) => {
  if (value == null || value === "") {
    return null;
  }

  return parsePercentage(value, label, options);
};

export const getOptionalPercentage = (formData, field, label = field, options) => {
  const rawValue = readFieldValue(formData, field);
  return parseOptionalPercentage(rawValue, label, options);
};

export const getDayOfMonth = (formData, field, label = field, { optional = false } = {}) => {
  const rawValue = readFieldValue(formData, field);

  if (optional && (rawValue == null || rawValue === "")) {
    return null;
  }

  const day = Number.parseInt(rawValue, 10);

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    throw new ValidationError(`${label} must be a day from 1 to 31`);
  }

  return day;
};

export const parseEnumValue = (value, validValues, label = "Value") => {
  if (!validValues.has(value)) {
    throw new ValidationError(`${label} is invalid`);
  }

  return value;
};

export const getFrequency = (formData, field = "frequency") => {
  const frequency = readFieldValue(formData, field);
  return parseEnumValue(frequency, FREQUENCIES, "Frequency");
};

export const getCategory = (formData, field = "category") => {
  const category = readFieldValue(formData, field);
  return parseEnumValue(category, CATEGORIES, "Category");
};

export const parseDateOnly = (value, label = "Date", { optional = false } = {}) => {
  if (optional && (value == null || value === "")) {
    return null;
  }

  const parsedValue = parseDateOnlyString(value);

  if (!parsedValue) {
    throw new ValidationError(`${label} must be a valid date`);
  }

  return parsedValue;
};

export const getOptionalDateOnly = (formData, field, label = field) => {
  const rawValue = readFieldValue(formData, field);
  return parseDateOnly(rawValue, label, { optional: true });
};

export const parseCalendarDate = (value, label = "Date", { optional = false } = {}) => {
  if (optional && (value == null || value === "")) {
    return null;
  }

  const parsedValue = normalizeCalendarDate(value);

  if (!parsedValue) {
    throw new ValidationError(`${label} must be a valid date`);
  }

  return parsedValue;
};

export const validationFailure = (error, fallbackMessage) => {
  if (error instanceof ValidationError) {
    return { success: false, error: error.message };
  }

  return { success: false, error: fallbackMessage };
};
