import React, { Component } from "react";
import {Link } from 'react-router-dom'
import Movie from "./Movie";
import Button from '@material-ui/core/Button';
import '../style/catalog.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


class Catalog extends Component {
  constructor(){
    super()
    this.state ={
      page:0,
      open: false,
      vertical: 'top',
      horizontal: 'center',

    }
  }

  
    searchMovie = (e) => {
        this.props.searchMovie(e)
      }

      nextPage = () => {
        window.scrollTo(0, 0)
        if(this.state.page === 7){
          this.setState({
            page: 0
          })
        } else
        this.setState({
          page: this.state.page +1
        })
      }
  
      previousPage = () =>{
        window.scrollTo(0, 0)
        if(this.state.page === 0){
          this.setState({
            page: 7
          })
        } else
        this.setState({
          page: this.state.page -1
        })
      }
      titleA = () =>{
        this.props.movies.sort(function(a,b){
      
            if (b.title > a.title) {
              return 1;
            }
            if (b.title < a.title) {
              return -1;
            }
            return 0;
        })
        this.setState({})
      }   

        titleZ = () =>{
          this.props.movies.sort(function(a,b){

              if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
          })
          this.setState({})
        }

  render() {
    let movies = this.props.movies
    let input = this.props.input.toLowerCase()
  // console.log(movies)
  // console.log(this.props.favourites)


  const theme = createMuiTheme({
    palette: {
      primary: { main: '#11cb5f' }, 
      secondary: { main: '#c0392b' }, 
    },
  });
    return (
        <div>
            <div className='menu'>
                <input name="input" type="text" placeholder="Find a movie!" value={this.props.input} onChange={this.searchMovie} />

{/* <Snack /> */}
          </div>
        <div className="movies">
                <h2>Popular movies:</h2>
                <div className='sorting'>
                  <span>Sort by title</span>
                  <span className='sort' onClick={this.titleZ}>▲</span>
                  <span className='sort' onClick={this.titleA}>▼</span>
                </div>
                {movies.length >0 ? movies.filter(m => m.title.toLowerCase().includes(input)).slice((this.state.page  * 16), (this.state.page * 16) + 16).map(m => <Movie key={m.id} movie={m} favourites={this.props.favourites}  newFav={this.props.newFav}   />) : null}
        </div>
        <div className="paging">
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="secondary" className='pre' onClick='window.scrollTo( 0, 1000 )' onClick={this.previousPage}>Previous Page</Button>
          <span className='numPages'>{this.state.page * 16} - {this.state.page * 16 + 16}</span> 
          <Button variant="outlined" color="secondary" className='next' onClick={this.nextPage}>Next Page</Button>
        </ThemeProvider>
        </div>
        </div>
    );
  }
}
 
export default Catalog;