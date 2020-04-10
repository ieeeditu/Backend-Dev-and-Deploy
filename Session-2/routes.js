const express = require('express');
const app = express();


app.route('/msg/hello')
.get((req, res) => {
  res.send('Hello World! Get');
})
.post((req, res) => {
  res.send('Hello World! Post');
});


app.listen(8080)

