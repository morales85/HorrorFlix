import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';

 
class Movie extends Component {


  rentMovie = () =>{
    this.props.rentMovie(this.props.movie.id)
  }

  addFav = () => {
    let newFav = this.props.movie
    this.props.newFav(newFav)
    console.log(this.props.movie)
    }

  render() {
    let movie = this.props.movie
    // console.log(movie)

    return (
      
        <div className='movies'>
        <Link to={`/movies/${movie.title}`}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </Link>
        <p className='rent' onClick={this.addFav}>Favourite</p>
        </div>

    )
  }
}

export default Movie
