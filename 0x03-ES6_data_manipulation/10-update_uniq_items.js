export default function updateUniqueItems(map) {
  if (!(map instanceof Map)){
    throw Error('Cannot process');
  }

  for (const [key, value] of map.item()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
