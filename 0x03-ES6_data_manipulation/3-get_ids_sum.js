export default function getStudentIdsSum(students) {
  return students.reduce((student) => sum(student.id));
}
