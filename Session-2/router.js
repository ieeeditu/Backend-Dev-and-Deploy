const express = require('express');
const app = express();

const msg = require('./controller/message');

app.use('/msg', msg);

app.get('', (req, res) => {
  res.send('Let\'s Go');
});



app.listen(8080)

