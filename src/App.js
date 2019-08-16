import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import MovieDetail from './components/movieDetail';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      movies:[],
      favs:[],
      budget: 15,
      input: ""
    }
  } 
  componentDidMount = async ()=>{
    let data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27", function(){})
    this.setState({
      movies: data.data.results
    })
    // let movies = data.data.results
    console.log(this.state.movies)
  }
rentMovie = id =>{
  let movies = [...this.state.movies]
  let rentedMovie = movies.find(m => m.id === id)
  rentedMovie.isRented = !rentedMovie.isRented
  let budget = this.state.budget - 3  
  this.setState({
  movies, budget
})
console.log('renting')
}

searchMovie = (event) => {
  let searchValue = event.target.value
  let inputMovie = event.target.name
  this.setState({ [inputMovie]: searchValue })
}



render () {
  return (

    <Router>
    <div className="App">
      <div className='main'>
        <span className='home' ><Link style={{ textDecoration: 'none' }} to="/">Home</Link></span>
        <div className="dropdown">
          <span className='catalog'><Link style={{ textDecoration: 'none' }} to="/catalog">Catalog</Link></span>
          <div className="dropdown-content">
            <Link style={{ textDecoration: 'none' }} to="/phase1">Phase 1</Link>
            <Link style={{ textDecoration: 'none' }} to="/phase2">Phase 2</Link>
            <Link style={{ textDecoration: 'none' }} to="/phase3">Phase 3</Link>
          </div>
        </div>
        <span className='logo'>REFLIX</span>
      </div>
      <Route path="/" exact component={Landing} />
      <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies} rentMovie={this.newMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route exact path="/phase1" render={() => <Phase1 movies={this.state.movies} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route exact path="/phase2" render={() => <Phase2 movies={this.state.movies} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route exact path="/phase3" render={() => <Phase3 movies={this.state.movies} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route path="/movies/:id" exact render={({ match }) => <MovieDetail rentMovie={this.rentMovie} match={match} movies={this.state.movies} />}/>
    </div>
    </Router>
  )
}}


export default App;