import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import MovieDetail from './MovieDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class Favourite extends Component {


  deleteFav = () => {
    let deleteFav = this.props.favourite
    this.props.deleteFav(deleteFav)
    // console.log(this.props.favourite)
    }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#11cb5f' }, 
        secondary: { main: '#c0392b' }, 
      },
    });
    let favourite = this.props.favourite
    // console.log(favourite)

    return (
        <div className='movies'>
        <Link to={`/favourites/${favourite.title}`}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${favourite.poster_path}`} alt="" />
        </Link>
        <ThemeProvider theme={theme}>
        <span className='plus'><Fab size="small" color="secondary"  onClick={this.deleteFav} ><DeleteIcon /></Fab></span>
        </ThemeProvider>
        </div>

    )
  }
}

export default Favourite