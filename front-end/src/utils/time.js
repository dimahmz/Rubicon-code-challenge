//  YY--MM--DD
export function getYearMonthDay(date) {
  const $Date = new Date(date);
  return `${$Date.getDate()}-${$Date.getMonth() + 1}-${$Date.getFullYear()}`;
}
