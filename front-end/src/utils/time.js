//  DD/MM/YYY
export function getDayMonthYear(dateString) {
  const $Date = new Date(dateString);
  const year = $Date.getUTCFullYear();
  const month = String($Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String($Date.getUTCDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
}

// YYYY-MM-DD,
export function getYearMonthDay(dateString) {
  const $Date = new Date(dateString);
  const year = $Date.getUTCFullYear();
  const month = String($Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String($Date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
