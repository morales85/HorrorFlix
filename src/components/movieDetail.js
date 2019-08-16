import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style/movie.css'
import '../style/movieDetail.css'

class MovieDetail extends Component {


    render() {
    const title = this.props.match.params.title
    const movie = this.props.movies.find(m => m.title == title)
    // const animation = this.props.animation.find(m => m.tittle == title)
    // console.log(id)
    console.log(movie)

        return (
                        <div id="movie">
            <h3>{movie.title}({movie.release_date})</h3> 
            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <span className='description'>{movie.overview}</span>
            </div>
            <Link style={{ textDecoration: 'none' }} to="/catalog"><Button variant="outlined" className='backb'>Back</Button></Link>
            </div>
        )
    }
}

export default MovieDetail;