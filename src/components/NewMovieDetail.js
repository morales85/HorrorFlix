import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios'
import YouTube from 'react-youtube';

import '../style/movie.css'
import '../style/movieDetail.css'

var moment = require('moment');



class NewMovieDetail extends Component {
    constructor() {
        super()
        
        this.state = {
            trailer:''
        }
      } 

componentDidMount = async ()=>{
    let mov = this.props.newM.find(m => m.title === this.props.match.params.title)
    let trailerId = mov.id
    let trailer = await axios.get(`https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=c703c8747b59946dcb55745504d255fd&language=en-US`, function(){}) 
    
    this.setState({
        trailer: trailer.data.results[0].key
    })

    // console.log(trailer.data.results)
    // let movieTrailer = trailer.data.result === undefined ? 'wF-6r27bekE' : trailer.data.results[0].key
    //  let movieTrailer = trailer.data.result === [] ? 'wF-6r27bekE' : trailer.data.results[0].key
    
    // trailer.data.results[0].key === trailer.data.results[0].key ? 
    // this.setState({
    //     trailer: trailer.data.results[0].key
    // }) : console.log('no trailer') 
}

    render() {

        const theme = createMuiTheme({
            palette: {
              primary: { main: '#11cb5f' }, 
              secondary: { main: '#c0392b' }, 
            },
          });
    const title = this.props.match.params.title
    const movie = this.props.newM.find(m => m.title === title)
    let moviePoster = movie.poster_path === null ? 
    'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' 
    : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        return (
        <div id="movie">
            <h3>{movie.title}({moment(movie.release_date).format('Do of MMMM, YYYY')})</h3> 
            <div className='descPic'>
                <img className="imagen" src={moviePoster} alt="" />
                <div><YouTube className='trailer' videoId={this.state.trailer} onReady={this._onReady}/></div>
            </div>
            <div className='description'>{movie.overview}</div>
            <ThemeProvider theme={theme}>
            <span className='backb'><Link style={{ textDecoration: 'none' }} to="/new"><Button variant="outlined" color="secondary" >Back</Button></Link></span>
            </ThemeProvider>
        </div>
        )
    }
}

export default NewMovieDetail;