const express = require('express');

const args = process.argv.slice(2);
const DATABASE = args[0];
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const content = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${content}${students.join('\n')}`);
  } catch (error) {
    res.send(`${content}${error.message}`);
  }
});

app.listen(port, () => {});

module.exports = app;
