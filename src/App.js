import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import New from './components/New';
import Upcoming from './components/Upcoming';
import TvShows from './components/TvShows';
import Favourites from './components/Favourites';
import MovieDetail from './components/movieDetail';
import NewMovieDetail from './components/NewMovieDetail';
import UpcomingMovieDetail from './components/UpcomingMovieDetail';
import TvDetail from './components/TvDetail';
import FavouriteDetail from './components/FavouriteDetail';
import axios from 'axios'
import logo from './style/logo_transparent.jpg';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
var moment = require('moment');


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      movies:[],
      favourites:[],
      tvShows:[],
      favouritesTv:[],
      newMovies:[],
      upcoming:[],
      input: ""
    }
  } 
  componentDidMount = async ()=>{

    let today = moment(new Date()).format('YYYY-MM-DD')

    let data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27", function(){})
    let data2 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=27", function(){})
    let data3 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_genres=27", function(){})
    let data4 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=4&with_genres=27", function(){})
    let data5 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=5&with_genres=27", function(){})
    let data6 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=6&with_genres=27", function(){})
    let results = data.data.results.concat(data2.data.results.concat(data3.data.results).concat(data4.data.results).concat(data5.data.results).concat(data6.data.results))
    this.setState({
      movies: results
    });

    let tvShows = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=c703c8747b59946dcb55745504d255fd&with_genres=27", function(){}) 
    this.setState({
      tvShows: tvShows.data.results
    })

    let newMovies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=true&page=1&with_genres=27&primary_release_date.gte=2019-08-01&primary_release_date.lte=${today}`, function(){}) 
    let newMovies2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=true&page=2&with_genres=27&primary_release_date.gte=2019-08-01&primary_release_date.lte=${today}`, function(){}) 
    let newMovies3 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=true&page=3&with_genres=27&primary_release_date.gte=2019-08-01&primary_release_date.lte=${today}`, function(){}) 
    let newMovies4 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=true&page=4&with_genres=27&primary_release_date.gte=2019-08-01&primary_release_date.lte=${today}`, function(){}) 
    let allNew = newMovies.data.results.concat(newMovies2.data.results.concat(newMovies3.data.results).concat(newMovies4.data.results)).filter(m => m.release_date < today)
    this.setState({
      newMovies: allNew
    })



    let upcomingMovies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&include_adult=false&include_video=true&page=1&with_genres=27&release_date.gte=${today}`, function(){})
    let upcomingMovies2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&include_adult=false&include_video=true&page=2&with_genres=27&release_date.gte=${today}`, function(){})
    let upcomingMovies3 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&include_adult=false&include_video=true&page=3&with_genres=27&release_date.gte=${today}`, function(){})
    let rightMovies = upcomingMovies.data.results.concat(upcomingMovies2.data.results.concat(upcomingMovies3.data.results)).filter(m => m.release_date > today)
    this.setState({
      upcoming: rightMovies
    })

    let favs = await axios.get("/movies", function(){})
    this.setState({
      favourites: favs.data
    })
  }
 
searchMovie = (event) => {
  let searchValue = event.target.value
  let inputMovie = event.target.name
  this.setState({ [inputMovie]: searchValue })
}

newFav = async movie => {
  let data = await axios.post("/movie", movie, function(){})
  this.setState({
    favourites: data.data
  })
}

newFavTv = async show => {
  let data = await axios.post("/show", show, function(){})
  this.setState({
    favouritesTv: data.data
  })
}

deleteFav = async movie => {
  let data = await axios.delete(`/movie/${movie.title}`)
  let favs = await axios.get("/movies", function(){})
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
      <Link style={{ textDecoration: 'none' }} to="/movies"><Button size="large" color="secondary" >Popular Movies</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/new"><Button size="large" color="secondary" >New Movies</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/upcoming"><Button size="large" color="secondary" >Upcoming Movies</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/tv"><Button size="large" color="secondary" >Tv Shows</Button></Link>
      <Link style={{ textDecoration: 'none' }} to="/favourites"><Button size="large" color="secondary" >Favourites</Button></Link>
      </ThemeProvider>


        <img src={logo} className='logo' alt=''></img>
      </div>
      <Route path="/" exact component={Landing} />
      <Route exact path="/movies" render={() => <Catalog movies={this.state.movies}  input={this.state.input} searchMovie={this.searchMovie} favourites={this.state.favourites} newFav={this.newFav} />} />
      <Route exact path="/new" render={() => <New newM={this.state.newMovies}  input={this.state.input} searchMovie={this.searchMovie} favourites={this.state.favourites} newFav={this.newFav} />} />
      <Route exact path="/upcoming" render={() => <Upcoming upcoming={this.state.upcoming}  input={this.state.input} searchMovie={this.searchMovie} favourites={this.state.favourites} newFav={this.newFav} />} />
      <Route exact path="/tv" render={() => <TvShows tv={this.state.tvShows} input={this.state.input} searchMovie={this.searchMovie} favouritesTv={this.state.favouritesTv} newFav={this.newFavTv} />} />
      <Route exact path="/favourites" render={() => <Favourites favourites={this.state.favourites} favouritesTv={this.state.favouritesTv} input={this.state.input} searchMovie={this.searchMovie} deleteFav={this.deleteFav}  />} />
      <Route path="/movies/:title" exact render={({ match }) =>  <MovieDetail match={match} movies={this.state.movies}  />}/>
      <Route path="/new/:title" exact render={({ match }) =>  <NewMovieDetail match={match} newM={this.state.newMovies}  />}/>
      <Route path="/upcoming/:title" exact render={({ match }) =>  <UpcomingMovieDetail match={match} upcoming={this.state.upcoming}  />}/>
      <Route path="/tv/:name" exact render={({ match }) =>  <TvDetail  match={match} tv={this.state.tvShows} />}/>
      <Route path="/favourites/:title" exact render={({ match }) =>  <FavouriteDetail  match={match} favourites={this.state.favourites}  />}/>
    </div>
    </Router>
  )
}}


export default App;