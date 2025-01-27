import { t } from 'i18next';

const UNITS = [
  'bytes',
  'kilobytes',
  'megabytes',
  'gigabytes',
  'terabytes',
  'petabytes',
];

export const formatGigabytes = (gigabytes: number , fixed = 1): string => {
  let value = gigabytes * 1024 * 1024 * 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < UNITS.length - 1) {
    value /= 1024;
    unitIndex++;
  }

  return `${parseFloat(value.toFixed(fixed))} ${t(`units.${UNITS[unitIndex]}`)}`;
};
