let message = 'Welcome to Holberton School, what is your name?\n';

process.stdin.setEncoding('utf8');
process.stdout.write(message);

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
