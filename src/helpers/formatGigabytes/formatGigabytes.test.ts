import { formatGigabytes } from "./formatGigabytes";

describe('formatGigabytes', () => {
  test('should handle 0 GB', () => {
    expect(formatGigabytes(0)).toBe('0 units.bytes');
  });

  test('should correctly convert values with different units', () => {
    // 1 GB → остается GB
    expect(formatGigabytes(1)).toBe('1 units.gigabytes');
    
    // 1024 GB → 1 TB
    expect(formatGigabytes(1024)).toBe('1 units.terabytes');
    
    // 2048 GB → 2 TB
    expect(formatGigabytes(2048)).toBe('2 units.terabytes');
    
    // 1536 GB → 1.5 TB
    expect(formatGigabytes(1536)).toBe('1.5 units.terabytes');
    
    // 1048576 GB → 1 PB
    expect(formatGigabytes(1048576)).toBe('1 units.petabytes');
  });

  test('should handle fractional values with different fixed params', () => {
    // 1.234 GB с fixed=2 → 1.23 GB
    expect(formatGigabytes(1.234, 2)).toBe('1.23 units.gigabytes');
    
    // 2.999 GB с fixed=0 → 3 GB
    expect(formatGigabytes(2.999, 0)).toBe('3 units.gigabytes');
    
    // 123.4567 GB с fixed=3 → 123.457 GB (округление)
    expect(formatGigabytes(123.4567, 3)).toBe('123.457 units.gigabytes');
  });

  test('should handle edge cases', () => {
    // Максимальная единица (petabytes)
    expect(formatGigabytes(Math.pow(1024, 3))).toBe('1 units.petabytes');
    
    // Отрицательные значения (если допустимо)
    expect(formatGigabytes(-5)).toBe('-5 units.gigabytes');
  });

  test('should use correct translation keys', () => {
    formatGigabytes(500);
    expect(t).toHaveBeenCalledWith('units.gigabytes');

    formatGigabytes(1500);
    expect(t).toHaveBeenCalledWith('units.terabytes');

    formatGigabytes(0.5);
    expect(t).toHaveBeenCalledWith('units.megabytes');
  });

  test('should show integer values without decimal part', () => {
    // 2.0 GB → 2 GB
    expect(formatGigabytes(2.0)).toBe('2 units.gigabytes');
    
    // 1024.0 GB → 1 TB
    expect(formatGigabytes(1024.0)).toBe('1 units.terabytes');
  });
});