export default function cleanSet(set, startString) {
  const string = [];

  if (startString.length === 0
  || typeOf set !== 'object'
  || typeOf stratString !== 'string') {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      string.push(item.slice(startString.length));
    }
  }
  return string.join('-');
}
