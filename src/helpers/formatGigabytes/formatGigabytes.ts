import { t } from "i18next";

export const formatGigabytes = (gigabytes: number, fixed = 1): string => {
  const units = [
    'bytes',
    'kilobytes',
    'megabytes',
    'gigabytes',
    'terabytes',
    'petabytes',
  ];
  let value = gigabytes * 1024 * 1024 * 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }

  if (value % 1 === 0) {
    return `${value.toFixed(0)} ${t(`units.${units[unitIndex]}`) }`;
  } else {
    return `${value.toFixed(fixed)} ${t(`units.${units[unitIndex]}`) }}`;
  }
};
