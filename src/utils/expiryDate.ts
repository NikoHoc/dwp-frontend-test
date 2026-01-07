export const calculateExpiryDate = (activeDays: number): string => {
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  return new Date(Date.now() + activeDays * millisecondsInDay).toISOString();
};
