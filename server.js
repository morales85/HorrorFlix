const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/route/api')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/reflixFS", { useNewUrlParser: true })
 

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})


app.use('/', api)


const port = 5000

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, function(){
    console.log(`running on port ${port}`)
})