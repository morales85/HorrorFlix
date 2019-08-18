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
    Movie.find({}).exec(function(error, movie){
        res.send(movie)
    })
})

router.delete('/movie/:title', function(req, res){
    console.log(req.params.title)
    Movie.findOne({title: req.params.title}, function(err, movie){
        movie.remove(function (err) {
            console.log(err)
            res.end()
        })
    })
})

module.exports = router