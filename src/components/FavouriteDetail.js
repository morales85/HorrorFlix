import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style/movie.css'
import '../style/movieDetail.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios'

var moment = require('moment');


class FavouriteDetail extends Component {
  constructor(){
    super()
    this.state ={
      currentMovie: ""
    }
  }
  componentDidMount = async ()=>{
    const title = this.props.match.params.title
    const favourite = this.props.favourites.find(m => m.title === title)
    this.setState({
      currentMovie: favourite.id
    })
    
  }
    render() {
console.log(this.state.currentMovie)
    const title = this.props.match.params.title
    const favourite = this.props.favourites.find(m => m.title === title)

    const theme = createMuiTheme({
        palette: {
          primary: { main: '#11cb5f' }, 
          secondary: { main: '#c0392b' }, 
        },
      });

        return (
            <div id="movie">
            <h3>{favourite.title}({moment(favourite.release_date).format('Do of MMMM, YYYY')})</h3> 
            <div><h3>Your rating:{favourite.rating}</h3></div>

            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${favourite.poster_path}`} alt="" />
                <span className='description'>{favourite.overview}</span>
            </div>
            <ThemeProvider theme={theme}>
            <span className='backb'><Link style={{ textDecoration: 'none' }} to="/favourites"><Button variant="outlined" color="secondary" >Back</Button></Link></span>
            </ThemeProvider>
            </div>
        )
    } 
}

export default FavouriteDetail;