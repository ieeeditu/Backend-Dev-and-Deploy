const express = require('express');
const cros = require('cors')
const bodyparser = require('body-parser');


const dbConnManager =  require('./utlis/dbconnmanger');

const organizationController = require('./controllers/organizationcontroller')

const app = express();
const port = 8080;

dbConnManager.safeConnect();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(cros());
app.use(bodyparser.json());

app.get('',(req,res) => {
    res.send('Webservice running');
})

app.use('/v1/organization', organizationController);

app.listen(port, () => console.log('Webservice listening on port: '+port));


