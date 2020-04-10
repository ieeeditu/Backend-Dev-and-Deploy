const express = require('express');
const app = express();

app.get('/',(req,res) => {
    return res.send('Hello, welcome to the session');
})

app.get('/sports/:id',(req,res) => {
    const id  = req.params.id;
    if (parseInt(id) === NaN){
        res.sendStatus(404)
        return res.send('Wrong ID provide');
    };

    res.sendStatus(404)
    return res.send('Inside abcd, get, id:'+id);
});


app.post('/sports',(req,res) => {
    req.body    
    return res.send('Inside abcd, post');
});
 


app.listen(4201, () => { console.log('Server started listening at 4201');})