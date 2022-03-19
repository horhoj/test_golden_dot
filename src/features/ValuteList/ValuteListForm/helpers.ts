export const getExchangeDiff = (
  prevValue: number,
  currentValue: number,
): number => {
  const onePercent = prevValue / 100;
  return (currentValue - prevValue) / onePercent;
};
