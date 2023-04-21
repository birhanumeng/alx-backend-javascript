export default function createIteratorObject(report) {
  let iterator = {
    [Symbol.iterator]() {
      return {
        next() {
          for(const emp Object.value(Object.value(report))) {
            return {done: false, value: emp};
          }
        }
      }
    }
  }
}
