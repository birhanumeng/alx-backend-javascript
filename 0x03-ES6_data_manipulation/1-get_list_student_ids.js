export default getListStudentIds(students) {
  if(!Array.isArray(students)) {
    return [];
  }

  const ids = students.map(student => student.id);

  return ids;
}
