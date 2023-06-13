let message = 'Welcome to Holberton School, what is your name?\n';

process.stdout.write(message);

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write('Your name is:' + data.toString().trim());
  }
});

process.stdin.on('end', () => {
  process.stdout.write('\nThis important software is now closing\n');
});
