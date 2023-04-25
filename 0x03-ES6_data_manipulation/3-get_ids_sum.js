export default function getStudentIdsSum(students) {
  const sumId = students.reduce((acc, curr) => acc + curr, 0);

  return sumId;
}
