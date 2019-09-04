import React, { Component } from "react";
import Show from "./Show";
import '../style/catalog.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


class TvShows extends Component {
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
      nameA = () =>{
        this.props.tv.sort(function(a,b){
      
            if (b.name > a.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
        })
        this.setState({})
      }   

        nameZ = () =>{
          this.props.tv.sort(function(a,b){

              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
          })
          this.setState({})
        }

  render() {
    let tv = this.props.tv
    let input = this.props.input.toLowerCase()
    console.log(tv)
    console.log(this.props.favouritesTv)
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#11cb5f' }, 
      secondary: { main: '#c0392b' }, 
    },
  });
    return (
        <div>
            <div className='menu'>
                <input name="input" type="text" placeholder="Find a show!" value={this.props.input} onChange={this.searchMovie} />

          </div>
        <div className="movies">
                <h2>Tv Shows:</h2>
                <div className='sorting'>
                  <span>Sort by name</span>
                  <span className='sort' onClick={this.nameZ}>▲</span>
                  <span className='sort' onClick={this.nameA}>▼</span>
                </div>
                {tv.length >0 ? tv.filter(m => m.name.toLowerCase().includes(input)).slice((this.state.page  * 16), (this.state.page * 16) + 16).map(m => <Show key={m.id} show={m} favourites={this.props.favourites}  newFav={this.props.newFav}   />) : null}
        </div>
        <div className="paging">
        <ThemeProvider theme={theme}>
          {/* <Button variant="outlined" color="secondary" className='pre' onClick='window.scrollTo( 0, 1000 )' onClick={this.previousPage}>Previous Page</Button> */}
          {/* <span className='numPages'>{this.state.page * 18} - {this.state.page * 16 + 16}</span>  */}
          {/* <Button variant="outlined" color="secondary" className='next' onClick={this.nextPage}>Next Page</Button> */}
          </ThemeProvider>
        </div>
        </div>
    );
  }
}
 
export default TvShows;