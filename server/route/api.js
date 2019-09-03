const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const Show = require('../models/Show')


router.get('/movies', function(req, res){
    Movie.find({}).exec(function(error, movies){
        res.send(movies)
    })
})

router.get('/shows', function(req, res){
    Show.find({}).exec(function(error, shows){
        res.send(shows)
    })
})
 
router.post('/movie', async function(req, res){
    let newMovie = new Movie(req.body)
    await newMovie.save()
    Movie.find({}).exec(function(error, movie){
        res.send(movie)
    })
})

router.post('/show', async function(req, res){
    let newShow = new Show(req.body)
    await newShow.save()
    Show.find({}).exec(function(error, show){
        res.send(show)
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