const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const showSchema = new Schema({
    id: Number,
    name: String,
    poster_path: String,
    overview: String,
    first_air_date: String,
})

const Show = mongoose.model("Show", showSchema)
module.exports = Show