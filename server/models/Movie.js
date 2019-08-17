const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: Number,
    title: String,
    poster_path: String,
    overview: String,
    release_date: String,
})
var userSchema = new Schema({
    name: {
      type: String,
      validate: {
        validator: function(v, cb) {
          User.find({name: v}, function(err,docs){
             cb(docs.length == 0);
          });
        },
        message: 'User already exists!'
      }
    }
  });
const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie