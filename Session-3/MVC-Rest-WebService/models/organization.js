const Schema = require('mongoose').Schema;
const model = require('mongoose').model

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
const Organization = model('organization');
module.exports = Organization;