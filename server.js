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
server.post('/api/login', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/sharePresentation', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.set('port', (process.env.PORT || 8080));
server.listen(server.get('port'), function() {
    console.log('server running', server.get('port'));
});