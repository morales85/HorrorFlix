import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

 
class Movie extends Component {


  rentMovie = () =>{
    this.props.rentMovie(this.props.movie.id)
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
    

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#11cb5f' }, 
        secondary: { main: '#c0392b' }, 
      },
    });
    let movie = this.props.movie
    // console.log(movie)

    return (
      
        <div className='movies'>
        <Link to={`/movies/${movie.title}`}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </Link>
        <ThemeProvider theme={theme}>
        <span className='plus'><Fab size="small" color="secondary" aria-label="add"  onClick={this.addFav} ><AddIcon /></Fab></span>
        </ThemeProvider>
        </div>

    )
  }
}

export default Movie
