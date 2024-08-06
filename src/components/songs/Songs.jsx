import React, { Component } from 'react'
import { Consumer } from '../../Context';
import Loading from '../setup/Loading';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          
          const {track_list} = value;

          if(track_list === undefined || track_list.length === 0){
            return <Loading />
          } else{
            return <h1>Songs</h1>
          }
        }}
      </Consumer>
    );
  }
}

export default Songs;