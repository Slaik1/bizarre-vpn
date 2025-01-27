export const getPercentage = (value: number, total: number) => {
  if (total === 0) return 0;

  return (value / total) * 100;
};
