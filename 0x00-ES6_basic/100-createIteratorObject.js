export default function createIteratorObject(report) {

  const iterator = {
    [Symbol.iterator]() {
      return {
        next() {
          for (const value of Object.values(report.allEmployees)) {
            for (const i of value) {
              return {done: false, value: i};
            }
          }
        }
      }
    }
  }

  return iterator;
}
