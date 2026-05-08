// This file contains logic related to credit card review, APR, and monthly interest estimates.

export type CreditCardMinimumPaymentLike = {
  balance: number;
  minimumPayment?: number | null;
  minimumPaymentPercentage?: number | null;
};

export type CreditCardReviewLike = CreditCardMinimumPaymentLike & {
  apr?: number | null;
  lastReviewedAt?: Date | string | null;
  createdAt: Date | string;
};

export const CREDIT_CARD_STALE_REVIEW_DAYS = 30;

export const CREDIT_CARD_STALE_REVIEW_MS = CREDIT_CARD_STALE_REVIEW_DAYS * 24 * 60 * 60 * 1000;

export const getCreditCardLastReviewedAt = (card: CreditCardReviewLike) => new Date(card.lastReviewedAt || card.createdAt);

export const isCreditCardStale = (card: CreditCardReviewLike) =>
  Date.now() - getCreditCardLastReviewedAt(card).getTime() > CREDIT_CARD_STALE_REVIEW_MS;

export const getCreditCardMonthlyInterestEstimate = (card: CreditCardReviewLike) => {
  if (card.apr == null) {
    return null;
  }

  return (card.balance * (card.apr / 100)) / 12;
};

const roundCurrency = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;

export const getCreditCardEffectiveMinimumPayment = (card: CreditCardMinimumPaymentLike) => {
  const minimumPayment = card.minimumPayment || 0;
  const minimumPaymentPercentage = card.minimumPaymentPercentage || 0;

  if (minimumPaymentPercentage <= 0) {
    return roundCurrency(minimumPayment);
  }

  return roundCurrency(Math.max(minimumPayment, card.balance * (minimumPaymentPercentage / 100)));
};
