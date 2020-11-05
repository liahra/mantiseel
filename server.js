const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());
server.use(express.static('public'));

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
    sfjlsjfnsfnls
});

server.post('/api/deleteSlide', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/updateSlide', async (req, res) => {
 

    res.status(200).json(response).end();
});

server.post('/api/makeUser', async (req, res) => {
 

    res.status(200).json(response).end();
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