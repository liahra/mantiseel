const express = require('express');
const bodyParser = require('body-parser');
const storage = require('./modules/storage');
const encrypt = require('./modules/cryptCompare');
const server = express();
const token = require('./modules/jwt'); 

server.use(bodyParser.json());
server.use(express.static('public'));

const credentials = require('./localenv').DATABASE_URL || process.env.DATABASE_URL;
const secret = require('./localenv').HASH_SECRET || process.env.HASH_SECRET;
const db = new storage(credentials);

/* **************** MIDDLEWARE ************************** */
const authenticator = async (req, res, next) => {
    console.log('Authenticating....');
    
    //If no authorization header:
    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1){
        return res.append("WWW-Authenticate", 'Basic realm="User Visible Realm", charset="UTF-8"').status(401).end();
    }

    const credentials = req.headers.authorization.split(' ')[1];
    const [username, password] = Buffer.from(credentials, 'base64').toString('UTF-8').split(":");

    //Retrieve username and password from database
    let user, passwordFromDB;
    if(username){
        user = await db.getUser(username);
        if(user){
            passwordFromDB = user.password;
        } else {
            console.log('User does not exist');
            return;
        }  
    }
    
    //If password OK - login = ok
    if(encrypt.comparePasswords(encrypt.encryptPassword(password), passwordFromDB)){
        req.login = true;
        next();
    } else {
        req.login = false;
        next();
    }
    
}

/* ****************************************** */
server.get('/test', (req, res)=>{
    token.generateToken({'payload': 'Hello World'});
});

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

server.post('/api/sharePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

/* ALL ENDPOINTS THAT REQUIRE AUTHENTICATION */

//post eller get?
server.get('/api/login', authenticator, async (req, res) => {
    if(req.login){

        //Hvis login er suksessfull her, så genererer vi et jwt som vi sender med i responsen   

        res.status(200).end();
    } else {
        res.status(403).end();
    }
    
    //res.status(200).json(response).end();
});



server.set('port', (process.env.PORT || 8080));
server.listen(server.get('port'), function() {
    console.log('server running', server.get('port'));
});