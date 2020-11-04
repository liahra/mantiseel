const express = require('express');
const auth = require('./auth');

let logins = express.Router();

logins.get('/random', async (req, res)=>{
    
    res.redirect('../logins/random.html');
});


logins.use(auth);

logins.get('/', (req, res)=>{
    console.log('Logins');
});

logins.post('/login', async (req, res) => {
    console.log('Login uten s');
    if(req.login){
        res.status(200).end();
    } else {
        res.status(403).end();
    }
    
    //res.status(200).json(response).end();
});

module.exports = logins;