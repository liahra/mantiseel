const express = require('express');
const bodyParser = require('body-parser');
const storage = require('./modules/storage');
const encrypt = require('./modules/cryptCompare');

const server = express(); 

server.use(bodyParser.json());
server.use(express.static('public'));

const credentials = require('./localenv').DATABASE_URL || process.env.DATABASE_URL;
const secret = require('./localenv').HASH_SECRET || process.env.HASH_SECRET;
const db = new storage(credentials);

/* MIDDLEWARE - MOVE TO SEPARATE MODULES ETC */

const authenticator = async (req, res, next) => {

    //If no authorization header:
    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1){
        return res.append("WWW-Authenticate", 'Basic realm="User Visible Realm", charset="UTF-8"').status(401).end();
    } else {
        //Else - check password in database etc.
        console.log(req.body);

        let username = req.body.username;
        let password = req.body.password;

        //Retrieve username and password from database
        let user = await db.getUser(username);
        console.log(user);
        let passwordFromDB = user.password;
        
        //If password OK - login = ok
        if(encrypt.comparePasswords(encrypt.encryptPassword(password), passwordFromDB)){
            res.status(200);
        } else {
            res.status(403);
        }

        //Else respond 403
    }

    
    next();
}

/* ****************************************** */




server.post('/api/makePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/deletePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/updatePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/makeSlide', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/deleteSlide', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/updateSlide', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/makeUser', async (req, res) => {
 
    let username = req.body.username;
    let password = req.body.password;

    //Hash password
    password = encrypt.encryptPassword(password);

    //Send info to database
    let result = await db.addUser(username, password);
    
    res.status(200).json(result).end();

    //res.status(200).json(response).end();
});

server.post('/api/deleteUser', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/updateUser', async (req, res) => {
 

    res.status(200).json(response).end();
});

//post eller get?
server.post('/api/login', authenticator, async (req, res) => {
 
    res.send('Secret message');
    //res.status(200).json(response).end();
});

server.post('/api/sharePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.set('port', (process.env.PORT || 8080));
server.listen(server.get('port'), function() {
    console.log('server running', server.get('port'));
});