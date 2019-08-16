import React, { Component } from "react";
import Movie from "./Movie";
import Button from '@material-ui/core/Button';
import '../style/catalog.css'


class Catalog extends Component {
  constructor(){
    super()
    this.state ={
      page:0
    }
  }
    searchMovie = (e) => {
        this.props.searchMovie(e)
      }
      nextPage = () => {
        if(this.state.page === 4){
          this.setState({
            page: 0
          })
        } else
        this.setState({
          page: this.state.page +1
        })
      }
  
      previousPage = () =>{
        if(this.state.page === 0){
          this.setState({
            page: 4
          })
        } else
        this.setState({
          page: this.state.page -1
        })
      }
      
  render() {
    let movies = this.props.movies
    let input = this.props.input.toLowerCase()
  console.log(movies)
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
                {movies.length >0 ? movies.filter(m => m.title.toLowerCase().includes(input)).slice((this.state.page  * 16), (this.state.page * 16) + 16).map(m => <Movie key={m.id} movie={m} rentMovie={this.props.rentMovie}   />) : null}
        </div>
        <div className="paging">
          <Button variant="outlined" className='pre' onClick={this.previousPage}>Previous Page</Button>
          <span className='numPages'>{this.state.page * 16} - {this.state.page * 16 + 16}</span> 
          <Button variant="outlined" className='next' onClick={this.nextPage}>Next Page</Button>
        </div>
        </div>
    );
  }
}

export default Catalog;