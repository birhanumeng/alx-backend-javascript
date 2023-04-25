export default function cleanSet(set, startString) {
  subStr = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      subStr.push(str.split(startString)[1]);
    }
  }

  return subStr.join('-');
}
