// This file contains logic related to credit card review and staleness. 

export const CREDIT_CARD_STALE_REVIEW_DAYS = 30

export const CREDIT_CARD_STALE_REVIEW_MS = CREDIT_CARD_STALE_REVIEW_DAYS * 24 * 60 * 60 * 1000;

export const getCreditCardLastReviewedAt = (card) => new Date(card.lastReviewedAt || card.createdAt);

export const isCreditCardStale = (card) =>
  Date.now() - getCreditCardLastReviewedAt(card).getTime() > CREDIT_CARD_STALE_REVIEW_MS;
