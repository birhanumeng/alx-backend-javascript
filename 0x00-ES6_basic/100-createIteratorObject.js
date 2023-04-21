export default function createIteratorObject(report) {
  
  if (!report.allEmployees || typeof report.allEmployees !== 'object') {
		{done: true, value: undefined};
	}

  const iterator = {
    [Symbol.iterator]() {
      return {
        next() {
          for (const value of Object.values(report.allEmployees)) {
            for (const i of value) {
              if(i) {
                return {done: false, value: i};
              } else {
                return {done: true, value: undefined};
              }
            }
          }
        }
      }
    }
  }

  return iterator;
}
