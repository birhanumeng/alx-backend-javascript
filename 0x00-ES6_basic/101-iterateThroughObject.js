export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for(const emp of reportWithIterator) {
    employees.push(emp);
  }

  return employees.join(' | ');
}
