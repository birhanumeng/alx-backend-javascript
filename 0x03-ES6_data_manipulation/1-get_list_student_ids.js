export default getListStudentIds(students) {
  if(!(sudents instanceOf Array)) {
    return [];
  }

  const ids = students.map(student => student.id);

  return ids;
}
