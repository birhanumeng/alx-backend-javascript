export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  sub = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      sub.push(str.slice(startString.length));
    }
  }

  return sub.join('-');
}
