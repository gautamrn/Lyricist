import React, { Component } from 'react'
import { Consumer } from '../../Context';
import Loading from '../setup/Loading';
import Song from './Song';

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          
          const {heading, track_list} = value;

          if(track_list === undefined || track_list.length === 0){
            return <Loading />
          } else{
            return (
              <div>
                <h3 className='text-center mb-4'>{heading}</h3>
                <div className='row'>
                {track_list.map(item =>(
                  <Song key={item.track.track_id} track={item.track} />
                ))}
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Songs;