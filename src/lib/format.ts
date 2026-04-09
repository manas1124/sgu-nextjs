// src/lib/format.ts

/**
 * Format a numeric amount as a USD price string with 2 decimals.
 * Example: 14.9 -> "$14.90"
 */
export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
