const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log('LOGGED');
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000)

