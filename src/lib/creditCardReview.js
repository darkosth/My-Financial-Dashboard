// This file contains logic related to credit card review, APR, and monthly interest estimates.

export const CREDIT_CARD_STALE_REVIEW_DAYS = 30;

export const CREDIT_CARD_STALE_REVIEW_MS = CREDIT_CARD_STALE_REVIEW_DAYS * 24 * 60 * 60 * 1000;

export const getCreditCardLastReviewedAt = (card) => new Date(card.lastReviewedAt || card.createdAt);

export const isCreditCardStale = (card) =>
  Date.now() - getCreditCardLastReviewedAt(card).getTime() > CREDIT_CARD_STALE_REVIEW_MS;

export const getCreditCardMonthlyInterestEstimate = (card) => {
  if (card.apr == null) {
    return null;
  }

  return card.balance * (card.apr / 100) / 12;
};

const roundCurrency = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export const getCreditCardEffectiveMinimumPayment = (card) => {
  const minimumPayment = card.minimumPayment || 0;
  const minimumPaymentPercentage = card.minimumPaymentPercentage || 0;

  if (minimumPaymentPercentage <= 0) {
    return roundCurrency(minimumPayment);
  }

  return roundCurrency(Math.max(minimumPayment, card.balance * (minimumPaymentPercentage / 100)));
};
