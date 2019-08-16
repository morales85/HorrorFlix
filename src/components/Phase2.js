import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Movie from "./Movie";

class Phase2 extends Component {

    searchMovie = (e) => {
        this.props.searchMovie(e)
      }

  render() {
    let comedies = this.props.comedies
    let input = this.props.input.toLowerCase()
console.log(comedies)
    return (
        <div>
            <div className='menu'>
                <input name="input" type="text" placeholder="Find a movie!" value={this.props.input} onChange={this.searchMovie} />
          </div>
          <h4>Budget: {this.props.budget}</h4>
        <div className="movies">
                {comedies.some(m => m.isRented) ?
            <div>
              <h2>Rented: </h2>
                {comedies.filter(m => m.isRented && m.title.toLowerCase().includes(input)).map(m => <Movie key={m.id} movie={m} rentMovie={this.props.rentMovie} />)}
            </div> : ""
          }
                <h2>Comedy:</h2>
                {comedies.filter(m => !m.isRented && m.title.toLowerCase().includes(input)).map(m => <Movie key={m.id} movie={m} rentMovie={this.props.rentMovie} />)}
        </div>
        </div>
    );
  }
}

export default Phase2;