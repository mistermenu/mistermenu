const CURRENCY_FORMATTER = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  style: "currency",
});

export function formatCurrency(number: number) {
  const formattedCurrency = CURRENCY_FORMATTER.format(number);
  return formattedCurrency.replace(/,00/, "");
}
