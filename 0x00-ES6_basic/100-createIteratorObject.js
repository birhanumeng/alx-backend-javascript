export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]() {
      return {
        next() {
          for (const value of Object.values(report.allEmployees)) {
            for (const emp of value) {
              if(emp) {
                return { done: false, value: emp };
              } else {
                return { done: true, value: undefined };
              }
            }
          }
        }
      }
    }
  }

  return iterator;
}
