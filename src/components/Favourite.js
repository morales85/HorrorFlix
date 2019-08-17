import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';


class Favourite extends Component {

  rentMovie = () =>{
    this.props.rentMovie(this.props.movie.id)
  }

  deleteFav = () => {
    // let deleteFav = this.props.favourite
    // this.props.deleteFav(deleteFav)
    console.log(this.props.favourite)
    }

  render() {
    let favourite = this.props.favourite
    console.log(favourite)

    return (
      
        <div className='movies'>
        <Link to={`/favourites/${favourite.title}`}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${favourite.poster_path}`} alt="" />
        </Link>
        <p className='rent' onClick={this.deleteFav}>X</p>
        </div>

    )
  }
}

export default Favourite