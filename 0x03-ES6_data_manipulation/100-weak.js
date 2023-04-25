export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw Error('Endpoint load is high');
  }

  return count;
}
