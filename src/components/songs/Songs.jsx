import React, { Component } from 'react'
import { Consumer } from '../../Context';
//import Loading from '../setup/Loading';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return<h1>TRacks</h1>
        }}
      </Consumer>
    );
  }
}

export default Songs;