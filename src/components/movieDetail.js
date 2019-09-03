import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import { BrowserRouter as Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style/movie.css'
import '../style/movieDetail.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios'
import YouTube from 'react-youtube';
import { async } from 'q';

var moment = require('moment');



class MovieDetail extends Component {
    constructor() {
        super()
        
        this.state = {
            trailer:''
        }
      } 

componentDidMount = async ()=>{
    // console.log(this.props.movies[0].title)
    let mov = this.props.movies.find(m => m.title === this.props.match.params.title)
    let trailerId = mov.id
    console.log(trailerId)
    // console.log(this.props.match.params.title)
    // console.log(this.props.movies.find(m=> m.title = this.props.match.params.tittle))
    let trailer = await axios.get(`https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=c703c8747b59946dcb55745504d255fd&language=en-US`, function(){}) 
    console.log(trailer.data.results[0].key)
    this.setState({
        trailer: trailer.data.results[0].key
    })
}

    render() {

        const theme = createMuiTheme({
            palette: {
              primary: { main: '#11cb5f' }, 
              secondary: { main: '#c0392b' }, 
            },
          });
    const title = this.props.match.params.title
    const movie = this.props.movies.find(m => m.title === title)
    // const id = this.props.movies.find(m => m.id === id)
    // console.log(id)
    // console.log(movie.id) ///id of the movie i need to find trailer
    
        return (
        <div id="movie">
            <h3>{movie.title}({moment(movie.release_date).format('Do of MMMM, YYYY')})</h3> 
            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <span className='description'>{movie.overview}</span>
                <YouTube className='trailer' videoId={this.state.trailer} onReady={this._onReady}/>

            </div>
            <ThemeProvider theme={theme}>
            <span className='backb'><Link style={{ textDecoration: 'none' }} to="/"><Button variant="outlined" color="secondary" >Back</Button></Link></span>
            </ThemeProvider>
        </div>
        )
    }
}

export default MovieDetail;