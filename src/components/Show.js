import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import showDetail from './showDetail';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


  
class Show extends Component {
  constructor(){
    super()
    this.state ={
      open: false,
      vertical:'botom',
      horizontal: 'center'
    }
  }

  addFav = () => {
    let names = this.props.favourites.map(m => m.name)
    let findshow = names.includes(this.props.show.name)
    // console.log(names)
    // console.log(this.props.show.name)
    // console.log(findshow)
    if(findshow == false){
      this.props.newFav(this.props.show)
    } else {
      console.log('show already in favourites')
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
    let show = this.props.show
    // console.log(show)
    const { vertical, horizontal, open } = this.state;

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
        message={<span id="message-id">{show.name} added to your favourites.</span>}
      />
        <Link to={`/tv/${show.name}`}>
            <img className="img"  src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="" />
        </Link>
        <ThemeProvider theme={theme}>
          {/* <Snacks /> */}
        {/* <span className='plus'><Fab size="small" color="secondary" aria-label="add" onClick={this.someFunc} ><AddIcon /></Fab></span> */}
        </ThemeProvider>
        </div>

    )
  }
}

export default Show