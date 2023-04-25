export default function hasValuesFromArray(set, array) {
  for (const elm of array) {
    if (!set.has(elm)) {
      return false;
    }
  }

  return true;
}
