const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session');
const log = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const favicon = require('serve-favicon');
const cors = require('cors');
const socket = require('socket.io');

const app = express();

mongoose.connect('mongodb://localhost/test', { 
    useNewUrlParser: true 
});
mongoose.connection.on('connected', () => {
    console.log('Database Connection Status: CONNECTED');
});
mongoose.connection.on('error', (err) => {
    console.log('Database Connection Status: FAILED');
});

app.locals = {
    authorised: true,
    user: "Robert" 
}

app.set('views', path.resolve(__dirname, 'server/views'));
app.set('view engine', 'pug');
app.use(log('dev'));
app.use(favicon(path.resolve(__dirname, 'public/images/favicon.ico')));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookie());
app.use(session({
    secret: 'cat',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.status(200).render('Home');
});

app.use('/api/v1', require('./server/controllers/task.controller'));

app.use(function(req, res) {
    res.status(404).render('404');
});

const serverInstance = app.listen(3000, () => console.log('Server started'));

const io = socket(serverInstance);

io.on('connect', socket => {
    socket.emit('msgFromServer', { data: 'Hello from Server! ' });
    socket.on('msgToServer', msg => {
        console.log(msg);
    })
})