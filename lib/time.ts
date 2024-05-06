export const forceUtc = ({ date, utcMs }: { date: string; utcMs: number }) => {
  const dateObj = new Date(date);
  const utc = dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000;
  return new Date(utc + utcMs);
};

export const utcMsOfKorea = 9 * 60 * 60 * 1000;
