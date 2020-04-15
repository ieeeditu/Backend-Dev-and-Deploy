const express = require('express');
const cros = require('cors')
const bodyparser = require('body-parser');

const Schema = require('mongoose').Schema;
const model = require('mongoose').model

const dbConnManager =  require('./utlis/dbconnmanger');
const resCreate = require('./utlis/response').response;
const StatusCode = require('./models/statuscode')

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

app.post('/v1/organization/create', async (req, res) =>{
    const org = req.body.organization;
    const organization = new  model('organization')();

    organization.name = org['name'];
    organization.path = org['path'];

    let msg;

    try {
        const doc = await organization.save();
        msg = resCreate(StatusCode.SUCCESS,'Organization has been created',doc)
    } catch (err) {
        msg = resCreate(StatusCode.FAIL,'Organization has not been created',err)
    }
    return res.send(msg);
});

app.listen(port, () => console.log('Webservice listening on port: '+port));


const organizationSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required!',
    },
    path: {
        type: String,
        required: 'This field is required!',
        unique: true
    }
});

model('organization',organizationSchema);
