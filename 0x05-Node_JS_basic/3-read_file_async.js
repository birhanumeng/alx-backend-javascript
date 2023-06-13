const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      let message;
      const response = [];

      const file_data = data.toString().split('\n');
      let students = file_data.filter((item) => item);
      students = students.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      message = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(message);

      response.push(message);
      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;
      for (const key of Object.keys(fields)) {
        message = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(message);
        response.push(message);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
