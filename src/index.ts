import app from './Router';
const port = 10000;
const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('Server is not listening anymore.');
});
