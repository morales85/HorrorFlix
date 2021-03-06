const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const movieSchema = new Schema({
    id: Number,
    title: String,
    poster_path: String,
    overview: String,
    release_date: String,
    // rating: { type: Number, default: 0 }
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie