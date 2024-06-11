export default function currency(amount /*, named*/) {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
