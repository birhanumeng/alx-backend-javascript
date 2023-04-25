export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  subStr = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      subStr.push(str.slice(startString.length));
    }
  }

  return subStr.join('-');
}
