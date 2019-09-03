import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import { BrowserRouter as Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style/movie.css'
import '../style/movieDetail.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
var moment = require('moment');



class TvDetail extends Component {


    render() {
        const theme = createMuiTheme({
            palette: {
              primary: { main: '#11cb5f' }, 
              secondary: { main: '#c0392b' }, 
            },
          });
    const name = this.props.match.params.name
    const tv = this.props.tv.find(m => m.name === name)
    // console.log(id)
    console.log(tv)
 
        return (
        <div id="movie">
            <h3>{tv.name}({moment(tv.first_air_date).format('Do of MMMM, YYYY')})</h3> 
            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt="" />
                <span className='description'>{tv.overview}</span>
            </div>
            <ThemeProvider theme={theme}>
            <span className='backb'><Link style={{ textDecoration: 'none' }} to="/tv"><Button variant="outlined" color="secondary" >Back</Button></Link></span>
            </ThemeProvider>
        </div>
        )
    }
}

export default TvDetail;