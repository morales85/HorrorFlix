import React, { Component } from "react";
import NewU from "./NewU";
import Button from '@material-ui/core/Button';
import '../style/catalog.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


class Upcoming extends Component {
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
        if(this.state.page === Math.floor(this.props.upcoming.length / 16)){
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
            page: Math.floor(this.props.upcoming.length / 16)
          })
        } else
        this.setState({
          page: this.state.page -1
        })
      }
      titleA = () =>{
        this.props.upcoming.sort(function(a,b){
            
            if (b.release_date > a.release_date) {
              return 1;
            }
            if (b.release_date < a.release_date) {
              return -1;
            }
            return 0;
        })
        this.setState({})
      }   

        titleZ = () =>{
          this.props.upcoming.sort(function(a,b){

              if (a.release_date > b.release_date) {
                return 1;
              }
              if (a.release_date < b.release_date) {
                return -1;
              }
              return 0;
          })
          this.setState({})
        }

  render() {
    let upcoming = this.props.upcoming
    let input = this.props.input.toLowerCase()

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

          </div>
        <div className="movies">
                <h2>Upcoming movies:</h2>
                <div className='sorting'>
                  <span>Sort by date</span>
                  <span className='sort' onClick={this.titleZ}>▲</span>
                  <span className='sort' onClick={this.titleA}>▼</span>
                </div>
                {upcoming.length > 0 ? upcoming.filter(m => m.title.toLowerCase().includes(input)).slice((this.state.page  * 16), (this.state.page * 16) + 16).map(m => <NewU key={m.id} movie={m} favourites={this.props.favourites}  newFav={this.props.newFav}   />) : null}
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
 
export default Upcoming;