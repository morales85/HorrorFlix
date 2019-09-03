import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import Favourites from './components/Favourites';
import MovieDetail from './components/movieDetail';
import FavouriteDetail from './components/FavouriteDetail';
import axios from 'axios'
import logo from './style/twitter_header_photo_1.png';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      movies:[],
      favourites:[],
      input: ""
    }
  } 
  componentDidMount = async ()=>{
    let data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27", function(){})
    let data2 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=27", function(){})
    let data3 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_genres=27", function(){})
    let data4 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=4&with_genres=27", function(){})
    let data5 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=5&with_genres=27", function(){})
    let data6 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=6&with_genres=27", function(){})
    let results = data.data.results.concat(data2.data.results.concat(data3.data.results).concat(data4.data.results).concat(data5.data.results).concat(data6.data.results))
    console.log(results)
    this.setState({
      movies: results
    });
 
    let favs = await axios.get("http://localhost:5000/movies", function(){})
    this.setState({
      favourites: favs.data
    })
    // console.log(this.state.favourites)

  }
 

searchMovie = (event) => {
  let searchValue = event.target.value
  let inputMovie = event.target.name
  this.setState({ [inputMovie]: searchValue })
}

newFav = async movie => {
  let data = await axios.post("http://localhost:5000/movie", movie, function(){})
  this.setState({
    favourites: data.data
  })
}
deleteFav = async movie => {
  console.log(movie)
  let data = await axios.delete(`http://localhost:5000/movie/${movie.title}`)
  let favs = await axios.get("http://localhost:5000/movies", function(){})
  this.setState({
    favourites: favs.data
  })
}


render () {
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#11cb5f' }, 
      secondary: { main: '#c0392b' },
    },
  });
  return (

    <Router>
    <div className="App">
      <div className='main'>
      <ThemeProvider theme={theme}>
      <Link style={{ textDecoration: 'none' }} to="/"><Button size="large" color="secondary" >Home</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/catalog"><Button size="large" color="secondary" >Catalog</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/favourites"><Button size="large" color="secondary" >Favourites</Button></Link>
      </ThemeProvider>


        <img src={logo} className='logo' alt=''></img>
      </div>
      <Route path="/" exact component={Landing} />
      <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies}  input={this.state.input} searchMovie={this.searchMovie} favourites={this.state.favourites} newFav={this.newFav} />} />
      <Route exact path="/favourites" render={() => <Favourites favourites={this.state.favourites}  input={this.state.input} searchMovie={this.searchMovie} deleteFav={this.deleteFav}  />} />
      <Route path="/movies/:title" exact render={({ match }) =>  <MovieDetail  match={match} movies={this.state.movies}  />}/>
      <Route path="/favourites/:title" exact render={({ match }) =>  <FavouriteDetail  match={match} favourites={this.state.favourites}  />}/>
    </div>
    </Router>
  )
}}


export default App;