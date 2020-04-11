const express = require('express');
const app = express();


app.use('/msg',(req, res, next) => {
  console.log('LOGGED');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World! Home');
});

app.get('/msg2/hello', (req, res) => {
  res.send('Hello World! MSg2 ');
});

app.get('/msg/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/msg/bye', (req, res) => {
  res.send('Bye World!');
});

app.listen(8080)

