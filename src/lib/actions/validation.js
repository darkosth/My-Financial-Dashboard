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

export const getRequiredText = (formData, field, label = field) => {
  const value = formData.get(field)?.toString().trim();

  if (!value) {
    throw new ValidationError(`${label} is required`);
  }

  if (value.length > 120) {
    throw new ValidationError(`${label} is too long`);
  }

  return value;
};

export const getMoneyAmount = (formData, field, label = field, { min = 0, allowZero = true } = {}) => {
  const rawValue = formData.get(field);
  const amount = Number.parseFloat(rawValue);
  const lowerBound = allowZero ? min : Math.max(min, Number.MIN_VALUE);

  if (!Number.isFinite(amount) || amount < lowerBound || amount > MAX_MONEY_AMOUNT) {
    throw new ValidationError(`${label} must be a valid amount`);
  }

  return Math.round(amount * 100) / 100;
};

export const getOptionalMoneyAmount = (formData, field, label = field, fallback = null) => {
  const rawValue = formData.get(field);

  if (rawValue == null || rawValue === "") {
    return fallback;
  }

  return getMoneyAmount(formData, field, label);
};

export const getOptionalPercentage = (formData, field, label = field) => {
  const rawValue = formData.get(field);

  if (rawValue == null || rawValue === "") {
    return null;
  }

  const percentage = Number.parseFloat(rawValue);

  if (!Number.isFinite(percentage) || percentage < 0 || percentage > 100) {
    throw new ValidationError(`${label} must be between 0 and 100`);
  }

  return percentage;
};

export const getDayOfMonth = (formData, field, label = field, { optional = false } = {}) => {
  const rawValue = formData.get(field);

  if (optional && (rawValue == null || rawValue === "")) {
    return null;
  }

  const day = Number.parseInt(rawValue, 10);

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    throw new ValidationError(`${label} must be a day from 1 to 31`);
  }

  return day;
};

export const getFrequency = (formData, field = "frequency") => {
  const frequency = formData.get(field)?.toString();

  if (!FREQUENCIES.has(frequency)) {
    throw new ValidationError("Frequency is invalid");
  }

  return frequency;
};

export const getCategory = (formData, field = "category") => {
  const category = formData.get(field)?.toString();

  if (!CATEGORIES.has(category)) {
    throw new ValidationError("Category is invalid");
  }

  return category;
};

export const validationFailure = (error, fallbackMessage) => {
  if (error instanceof ValidationError) {
    return { success: false, error: error.message };
  }

  return { success: false, error: fallbackMessage };
};
