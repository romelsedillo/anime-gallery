export const formatDate = (
  day?: number,
  month?: number,
  year?: number
): string => {
  if (!day || !month || !year) return "Date TBA";

  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
