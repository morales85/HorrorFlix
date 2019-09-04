const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/route/api')
const mongoose = require('mongoose')
mongoose.connect('mongodb://rafa123:rafa123@horrorcluster-vjspk.mongodb.net/test?retryWrites=true&w=majority')


app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()
// })


app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = 5000
app.listen(process.env.PORT || PORT);
