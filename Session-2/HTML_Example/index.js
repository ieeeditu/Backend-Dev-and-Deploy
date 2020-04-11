const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./statics'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/',(req,res) => {
    res.sendFile('index.html',{root: __dirname+'/templates'})
});

app.listen(8080);
