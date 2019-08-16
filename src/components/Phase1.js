import React, { Component } from "react";
import Movie from "./Movie";

class Catalog extends Component {

    searchMovie = (e) => {
        this.props.searchMovie(e)
      }

  render() {
    let movies = this.props.movies
    let input = this.props.input.toLowerCase()
  // console.log(movies)
    return (
      
        <div>
            <div className='menu'>
                <input name="input" type="text" placeholder="Find a movie!" value={this.props.input} onChange={this.searchMovie} />
          </div>
          <h4>Budget: {this.props.budget}</h4>
        <div className="movies">
        {movies.some(m => m.isRented) ?
            <div>
              <h2>Rented: </h2>
                {movies.filter(m => m.isRented && m.title.toLowerCase().includes(input)).map(m => <Movie key={m.id} movie={m} rentMovie={this.props.rentMovie} />)}
            </div> : ""
          }
                <h2>Catalog:</h2>
                {movies.filter(m => !m.isRented && m.title.toLowerCase().includes(input)).map(m => <Movie key={m.id} movie={m} rentMovie={this.props.rentMovie}   />)}
        </div>
        </div>
    );
  }
}

export default Catalog;