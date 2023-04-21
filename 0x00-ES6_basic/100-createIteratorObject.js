export default function createIteratorObject(report) {
  const interable = [];

  if (!report.allEmployees || typeof report.allEmployees !== 'object') {
		return iterator;
	}

  iterator = {
		* [Symbol.iterator]() {
			for (const value of Object.values(report.allEmployees)) {
				for (const emp of value) {
					yield emp;
				}
			}
		},
	};

	return iterator;
}
