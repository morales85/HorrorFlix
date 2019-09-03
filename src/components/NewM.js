import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import alt from '../style/alt.png';


import '../style/snack.css'



  
class NewM extends Component {
  constructor(){
    super()
    this.state ={
      open: false,
      vertical:'botom',
      horizontal: 'center',
      noPoster: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png'
    }
  }

  addFav = () => {
    let titles = this.props.favourites.map(m => m.title)
    let findMovie = titles.includes(this.props.movie.title)
    // console.log(titles)
    // console.log(this.props.movie.title)
    // console.log(findMovie)
    if(findMovie == false){
      this.props.newFav(this.props.movie)
    } else {
      console.log('movie already in favourites')
    }
    }
    
    handleClick =  () => {
      this.setState({
        open: true, 
      })
    };
    handleClose =() => {
      this.setState({
        open: false
      })
    }

    someFunc = () => {
      this.handleClick();
      this.addFav()
  }
    

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#11cb5f' }, 
        secondary: { main: '#c0392b' }, 
      },
    });
    let movie = this.props.movie
    // console.log(movie.id)
    const { vertical, horizontal, open } = this.state;

    let moviePoster = movie.poster_path === null ? 
    'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' 
    : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
      
        <div className='movies' >
           <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={this.handleClose}
        autoHideDuration={3000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{movie.title} added to your favourites.</span>}
      />
        <Link to={`/new/${movie.title}`}>
            <img className="img"  src={moviePoster} alt='movie poster' />
        </Link>
        <ThemeProvider theme={theme}>
          {/* <Snacks /> */}
        <span className='plus'><Fab size="small" color="secondary" aria-label="add" onClick={this.someFunc} ><AddIcon /></Fab></span>
        </ThemeProvider>
        </div>

    )
  }
}

export default NewM