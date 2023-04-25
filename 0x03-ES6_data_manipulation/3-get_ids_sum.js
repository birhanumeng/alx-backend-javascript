export default function getStudentIdsSum(students) {
  const sumId = 0;
  return students.reduce((student) => sumId + student.id);
}
