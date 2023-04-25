export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString.length) {
    return '';
  }

  const subStr = [];

  for (const str of set) {
    if (str.startsWith(startString)) {
      subStr.push(str.slice(startString.length));
    }
  }
  return subStr.join('-');
}
