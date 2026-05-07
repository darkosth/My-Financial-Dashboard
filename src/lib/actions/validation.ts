import { normalizeCalendarDate, parseDateOnlyString } from "@/lib/calendarDate";
import { Category, Frequency } from "@prisma/client";

const MAX_MONEY_AMOUNT = 100_000_000;
const FREQUENCIES = new Set<Frequency>([Frequency.WEEKLY, Frequency.BIWEEKLY, Frequency.MONTHLY, Frequency.YEARLY]);
const CATEGORIES = new Set<Category>([
  Category.HOUSING,
  Category.TRANSPORTATION,
  Category.FOOD,
  Category.UTILITIES,
  Category.INSURANCE,
  Category.MEDICAL,
  Category.SAVINGS,
  Category.PERSONAL,
  Category.ENTERTAINMENT,
  Category.SUBSCRIPTIONS,
  Category.DEBT,
  Category.OTHER,
]);

export type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string };

export class ValidationError extends Error {}

const readFieldValue = (formData: FormData, field: string) => formData.get(field)?.toString();

export const parseRequiredText = (value: unknown, label = "Value", { maxLength = 120 }: { maxLength?: number } = {}) => {
  const normalizedValue = value?.toString().trim();

  if (!normalizedValue) {
    throw new ValidationError(`${label} is required`);
  }

  if (normalizedValue.length > maxLength) {
    throw new ValidationError(`${label} is too long`);
  }

  return normalizedValue;
};

export const parseOptionalText = (
  value: unknown,
  label = "Value",
  { maxLength = 160, fallback = null }: { maxLength?: number; fallback?: string | null } = {},
) => {
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

export const getRequiredText = (formData: FormData, field: string, label: string = field, options?: { maxLength?: number }) => {
  const value = readFieldValue(formData, field);
  return parseRequiredText(value, label, options);
};

export const parseMoneyAmount = (
  value: unknown,
  label = "Amount",
  { min = 0, allowZero = true }: { min?: number; allowZero?: boolean } = {},
) => {
  if (value == null || value === "") {
    throw new ValidationError(`${label} is required`);
  }

  const amount = Number.parseFloat(String(value));
  const lowerBound = allowZero ? min : Math.max(min, Number.EPSILON);

  if (!Number.isFinite(amount) || amount < lowerBound || amount > MAX_MONEY_AMOUNT) {
    throw new ValidationError(`${label} must be a valid amount`);
  }

  return Math.round(amount * 100) / 100;
};

export const parseOptionalMoneyAmount = (
  value: unknown,
  label = "Amount",
  { fallback = null, ...options }: { fallback?: number | null; min?: number; allowZero?: boolean } = {},
) => {
  if (value == null || value === "") {
    return fallback;
  }

  return parseMoneyAmount(value, label, options);
};

export const getMoneyAmount = (
  formData: FormData,
  field: string,
  label: string = field,
  options?: { min?: number; allowZero?: boolean },
) => {
  const rawValue = readFieldValue(formData, field);
  return parseMoneyAmount(rawValue, label, options);
};

export const getOptionalMoneyAmount = (
  formData: FormData,
  field: string,
  label: string = field,
  fallback: number | null = null,
) => {
  const rawValue = readFieldValue(formData, field);
  return parseOptionalMoneyAmount(rawValue, label, { fallback });
};

export const parsePercentage = (value: unknown, label = "Percentage", { min = 0, max = 100 }: { min?: number; max?: number } = {}) => {
  const percentage = Number.parseFloat(String(value));

  if (!Number.isFinite(percentage) || percentage < min || percentage > max) {
    throw new ValidationError(`${label} must be between ${min} and ${max}`);
  }

  return percentage;
};

export const parseOptionalPercentage = (value: unknown, label = "Percentage", options?: { min?: number; max?: number }) => {
  if (value == null || value === "") {
    return null;
  }

  return parsePercentage(value, label, options);
};

export const getOptionalPercentage = (formData: FormData, field: string, label: string = field, options?: { min?: number; max?: number }) => {
  const rawValue = readFieldValue(formData, field);
  return parseOptionalPercentage(rawValue, label, options);
};

export function getDayOfMonth(
  formData: FormData,
  field: string,
  label?: string,
  options?: { optional?: false },
): number;
export function getDayOfMonth(
  formData: FormData,
  field: string,
  label: string | undefined,
  options: { optional: true },
): number | null;
export function getDayOfMonth(
  formData: FormData,
  field: string,
  label: string = field,
  { optional = false }: { optional?: boolean } = {},
): number | null {
  const rawValue = readFieldValue(formData, field);

  if (optional && (rawValue == null || rawValue === "")) {
    return null;
  }

  const day = Number.parseInt(String(rawValue), 10);

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    throw new ValidationError(`${label} must be a day from 1 to 31`);
  }

  return day;
}

export const parseEnumValue = <T extends string>(value: unknown, validValues: Set<T>, label = "Value") => {
  if (typeof value !== "string" || !validValues.has(value as T)) {
    throw new ValidationError(`${label} is invalid`);
  }

  return value as T;
};

export const getFrequency = (formData: FormData, field = "frequency") => {
  const frequency = readFieldValue(formData, field);
  return parseEnumValue(parseRequiredText(frequency, "Frequency"), FREQUENCIES, "Frequency");
};

export const getCategory = (formData: FormData, field = "category") => {
  const category = readFieldValue(formData, field);
  return parseEnumValue(parseRequiredText(category, "Category"), CATEGORIES, "Category");
};

export const parseDateOnly = (value: unknown, label = "Date", { optional = false }: { optional?: boolean } = {}) => {
  if (optional && (value == null || value === "")) {
    return null;
  }

  const parsedValue = parseDateOnlyString(String(value));

  if (!parsedValue) {
    throw new ValidationError(`${label} must be a valid date`);
  }

  return parsedValue;
};

export const getOptionalDateOnly = (formData: FormData, field: string, label: string = field) => {
  const rawValue = readFieldValue(formData, field);
  return parseDateOnly(rawValue, label, { optional: true });
};

export function parseCalendarDate(value: unknown, label?: string, options?: { optional?: false }): Date;
export function parseCalendarDate(value: unknown, label: string | undefined, options: { optional: true }): Date | null;
export function parseCalendarDate(
  value: unknown,
  label = "Date",
  { optional = false }: { optional?: boolean } = {},
): Date | null {
  if (optional && (value == null || value === "")) {
    return null;
  }

  const parsedValue = normalizeCalendarDate(String(value));

  if (!parsedValue) {
    throw new ValidationError(`${label} must be a valid date`);
  }

  return parsedValue;
}

export const validationFailure = (error: unknown, fallbackMessage: string): ActionResult => {
  if (error instanceof ValidationError) {
    return { success: false, error: error.message };
  }

  return { success: false, error: fallbackMessage };
};
