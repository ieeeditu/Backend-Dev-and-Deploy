const router  = require('express').Router();
const resCreate = require('../utlis/response').response;
const StatusCode = require('../models/statuscode')

const organizationService = require('../services/organizationservice');

router.post('/create', async (req, res) =>{
    const org = req.body.organization;

    let msg
    try {
        const doc = await organizationService.createOrganization(org);
        msg = resCreate(StatusCode.SUCCESS,'Organization has been created',doc)
    } catch (err) {
        msg = resCreate(StatusCode.FAIL,'Organization has not been created',err)
    }
    res.send(msg);
});

router.get('/bypath/:path', async (req,res)=>{
    const path = req.params.path;
    let msg;
    try {
        const doc = await organizationService.getOrganizationByPath(path);
        msg = resCreate(StatusCode.SUCCESS,'Organization has been created',doc)
    } catch (err) {
        msg = resCreate(StatusCode.FAIL,'Organization has not been created',err)
    }
    res.send(msg);
})


module.exports = router;