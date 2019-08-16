const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: Number,
    title: String,
    image: String,
    overview: String,
    release_date: String,
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie