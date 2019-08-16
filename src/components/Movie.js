import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';


class Movie extends Component {

  rentMovie = () =>{
    this.props.rentMovie(this.props.movie.id)
  }

  render() {
    let movie = this.props.movie
    // console.log(movie)

    return (
      
        <div className='movies'>
        <Link to={`/movies/${movie.title}`}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </Link>
        {movie.isRented ? <p className='rent' onClick={this.rentMovie}>Rented</p> : <p className='rent' onClick={this.rentMovie}>Rent</p>}
        </div>

    )
  }
}

export default Movie
