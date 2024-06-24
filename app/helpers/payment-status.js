export default function isActive(orderStatus) {
  if (orderStatus === 'FAILED') {
    return 'text-red-400';
  } else if (orderStatus === 'COMPLETED') {
    return 'text-green-500';
  } else {
    return 'text-orange-400';
  }
}
