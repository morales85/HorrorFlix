import React, { Component } from 'react';
// import YouTube from 'react-youtube';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../style/movie.css'
import '../style/movieDetail.css'



class AnimationDetail extends Component {

    render() {
    const title = this.props.match.params.title
    const animation = this.props.animation.find(m => m.tittle == title)

        return (
            <div>
            <div id="movie">
            <h3>{animation.title}({animation.release_date})</h3> 
            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${animation.poster_path}`} alt="" />
                <span className='description'>{animation.overview}</span>
            </div>
            </div>
            </div>
        )
    }
}

export default AnimationDetail;