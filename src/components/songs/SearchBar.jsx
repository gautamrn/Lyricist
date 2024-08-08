import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';

class SearchBar extends Component {
    state = {
        trackTitle: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    searchSong = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                this.setState({ trackTitle: '' });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='bg-black-custom p-6 rounded-md shadow-custom mb-4'>
                            <h1 className='text-3xl font-bold text-center text-white mb-2'>Search Songs</h1>
                            <p className='text-lg text-center text-light-gray mb-4'>Find Lyrics for any Song</p>
                            <form onSubmit={this.searchSong.bind(this, dispatch)}>
                                <div className='mb-4'>
                                    <input
                                        className='w-full p-3 bg-gray-custom text-white rounded-md focus:outline-none'
                                        type='text'
                                        placeholder='Song Name'
                                        name='trackTitle'
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className='w-full p-3 bg-green text-white rounded-md hover:bg-light-blue' type='submit'>Search Songs</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default SearchBar;
