import React, { Component } from "react";
import Favourite from "./Favourite";
import '../style/catalog.css'


class Favourites extends Component {
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
    let favourites = this.props.favourites
    let input = this.props.input.toLowerCase()
  // console.log(favourites)
    return (

        <div>
            <div className='menu'>
                <input name="input" type="text" placeholder="Find a movie!" value={this.props.input} onChange={this.searchMovie} />
          </div>
                <h2>Favourites:</h2>
                {favourites.length >0 ? favourites.filter(m => m.title.toLowerCase().includes(input)).slice((this.state.page  * 16), (this.state.page * 16) + 16).map(m => <Favourite key={m.id} favourite={m} rentMovie={this.props.rentMovie} deleteFav={this.props.deleteFav}   />) : null}
        </div>

    );
  }
}

export default Favourites;