import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import '../style/snack.css';

class PositionedSnackbar extends Component {
constructor(){
  super()
  this.state ={
    open: false,
    vertical:'top',
    horizontal: 'center'
  }
}
render(){
  const { vertical, horizontal, open } = this.state;

  const handleClick = newState => () => {
    this.setState({
      open: true, ...newState
    })
  };

  function handleClose() {
    this.setState({
      open: false
    })
  }

  return (
    <div>
      <Button className='boton' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
        Make a match
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">You added a movie to your favourites</span>}
      />
    </div>
  );
      }
}
export default PositionedSnackbar;