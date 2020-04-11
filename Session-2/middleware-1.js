const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log('LOGGED');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World! Home');
});

app.get('/hello', (req, res) => {
  res.send('Hello World! Hello');
});

app.listen(8080)

