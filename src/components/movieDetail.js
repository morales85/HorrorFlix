import React, { Component } from 'react';
// import YouTube from 'react-youtube';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../style/movie.css'


class MovieDetail extends Component {

    render() {
    const id = this.props.match.params.id
    const movie = this.props.movies
    console.log(id)
    console.log(movie[id])

        return (
            movie[id] ? <h3>{movie[id].title}</h3> : <div>loading</div>
            // <div id="movie">
            //     <h3>{movie[id].title}</h3>
            //     {/* <h3>{movie[title].title} ({movie[title].release_date})</h3> */}
            //     {/* <p className='description'>{movie[id].descrShort}</p> */}
            //     {/* <YouTube className='trailer' videoId={movie[id].trailer} onReady={this._onReady}/> */}
            // </div>
        )
    }
}

export default MovieDetail;