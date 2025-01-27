import { describe, it, expect } from 'vitest';

import { getPercentage } from './getPercentage';

describe('getPercentage', () => {
  it('returns 0 if the total is 0', () => {
    const result = getPercentage(50, 0);

    expect(result).toBe(0);
  });

  it('returns 0 if the value is 0, regardless of total', () => {
    const result = getPercentage(0, 100);

    expect(result).toBe(0);
  });

  it('calculates the correct percentage for valid inputs', () => {
    const result = getPercentage(50, 200);

    expect(result).toBe(25);
  });

  it('returns 100 if the value equals the total', () => {
    const result = getPercentage(100, 100);

    expect(result).toBe(100);
  });

  it('handles cases where the value exceeds the total', () => {
    const result = getPercentage(150, 100);

    expect(result).toBe(150);
  });

  it('handles floating-point numbers correctly', () => {
    const result = getPercentage(0.5, 2);

    expect(result).toBeCloseTo(25);
  });

  it('handles edge case with negative total', () => {
    const result = getPercentage(50, -200);

    expect(result).toBe(-25);
  });

  it('handles edge case with negative value', () => {
    const result = getPercentage(-50, 200);

    expect(result).toBe(-25);
  });

  it('handles both value and total being negative', () => {
    const result = getPercentage(-50, -200);

    expect(result).toBe(25);
  });
});
