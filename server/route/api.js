const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')


router.get('/movies', function(req, res){
    Movie.find({}).exec(function(error, movies){
        res.send(movies)
    })
})

router.post('/movie', async function(req, res){
    let newMovie = new Movie(req.body)
    await newMovie.save()
    Movie.find({}).exec(function(error, movies){
        res.send(movies)
    })
})

module.exports = router