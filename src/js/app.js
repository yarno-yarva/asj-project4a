// TODO: write your code here
export default function alive(item) {
  if (item.health > 50) {
    return 'healthy';
  } if (item.health <= 50 && item.health >= 10) {
    return 'wounded';
  }
  return 'critical';
}
