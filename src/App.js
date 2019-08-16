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
      comedies:[],
      animation:[],
      allmovies:[],
      budget: 15,
      input: ""
    }
  } 
  componentDidMount = async ()=>{
    let data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27", function(){})
    let data2 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_genres=27", function(){})
    let data3 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_genres=27", function(){})
    let data4 = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c703c8747b59946dcb55745504d255fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=4&with_genres=27", function(){})
    let results = data.data.results.concat(data2.data.results.concat(data3.data.results).concat(data4.data.results))
    console.log(results)
    this.setState({
      movies: results
    })


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
            <Link style={{ textDecoration: 'none' }} to="/catalog">Horror</Link>
            {/* <Link style={{ textDecoration: 'none' }} to="/comedy">Comedy</Link>
            <Link style={{ textDecoration: 'none' }} to="/animation">Animation</Link> */}
          </div>
        </div>
        <span className='logo'>REFLIX</span>
      </div>
      <Route path="/" exact component={Landing} />
      {/* <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies} rentMovie={this.newMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} /> */}
      <Route exact path="/catalog" render={() => <Catalog movies={this.state.movies} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route exact path="/Comedy" render={() => <Phase2 comedies={this.state.comedies} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route exact path="/animation" render={() => <Phase3 animation={this.state.animation} rentMovie={this.rentMovie} input={this.state.input} searchMovie={this.searchMovie} budget={this.state.budget} />} />
      <Route path="/movies/:title" exact render={({ match }) =>  <MovieDetail rentMovie={this.rentMovie} match={match} movies={this.state.movies}  />}/>
    </div>
    </Router>
  )
}}


export default App;