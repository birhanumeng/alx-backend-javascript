export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const elm of array) {
    arr.push(appendString + elm);
  }

  return arr;
}
