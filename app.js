const express = require('express')
const app = express()
const port = 3000


// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/1jbootstrap', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/1jbootstrap.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/1kbootstrap', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/1kbootstrap.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/2jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/2jutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/2kutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/2kutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/3jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/3jutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/3jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/3jutilities.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/4jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/4jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/4kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/4kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/5jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/5jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/5kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/5kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/6jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/6jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/6kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/6kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/7jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/7jgrid.html'));
    //__dirname : It will resolve to your project folder.

});router.get('/7kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/7kgrid.html'));
    //__dirname : It will resolve to your project folder.
});


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))