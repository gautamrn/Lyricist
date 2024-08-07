import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../../Context';

class SearchBar extends Component {
    state = {
        trackName: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    searchSong = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=> {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            this.setState({trackTitle:''});
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <Consumer>
        {value => {
            const {dispatch} = value;
            return (
                <div className='card card-body mb-4 p-4'>
                    <h1 className='diplsay-4 text-center'>Search Songs</h1>
                    <p className='lead text-center'>Find Lyrics for any Song</p>
                    <form onSubmit={this.searchSong.bind(this, dispatch)}>
                        <div className='form-group'>
                            <input className='form-control form-control-lg' type='text' placeholder='Song Name' name='trackTitle' value={this.state.trackTitle} onChange={this.onChange} />
                        </div>
                        <button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>Search Songs</button>
                    </form>
                </div>
            );
        }}
      </Consumer>
    )
  }
}

export default SearchBar;