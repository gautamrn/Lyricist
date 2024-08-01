import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    songLists: [],
    heading: 'Top 10 Songs'
  };

  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`)
    .then(res=> console.log(res.data))
    .catch(err => console.log(err));
  }

  render() {
    return (
        <Context.Provider value={this.state}>
          {this.props.children};
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
