export default function getStudentsByLocation(students, city) {
  const student = students.filter((student) => student.location == city);

  return student;
}
