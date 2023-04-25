export default function getStudentIdsSum(students) {
  const sumId = students.reduce((acc, student) => acc + student.id, 0);

  return sumId;
}
