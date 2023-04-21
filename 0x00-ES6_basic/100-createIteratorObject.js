export default function createIteratorObject(report) {
  let iterator = [];

	iterator = {
		* [Symbol.iterator]() {
			for (const value of Object.values(report.allEmployees)) {
				for (const i of value) {
					yield i;
				}
			}
		},
	};

	return iterator;
}
