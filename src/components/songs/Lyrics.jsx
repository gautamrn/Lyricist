import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../setup/Loading';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';

function Lyrics() {
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics);

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        setTrack(res.data.message.body.track);
      })
      .catch((err) => console.log(err));
  }, [id]);
  
  if (!track || Object.keys(track).length === 0 || !lyrics || Object.keys(lyrics).length === 0) {
    return <Loading />;
  } else {
    return (
      <div>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Back
        </Link>
        <div className='card'>
            <h5 className="card-header">
            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className='card-body'>
                <p className='card-text'>{lyrics.lyrics_body}</p>
            </div>
        </div>
        <ul className='list-group mt-3'>
            <li className='list-group-item'>
                <strong>Genre: </strong>{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
            </li>
            <li className='list-group-item'>
              <strong>Explicit?: </strong>
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className='list-group-item'>
              <strong>Release Date: </strong>
              <Moment format='MM/DD/YYYY'>{track.first_release_date}</Moment>
            </li>
        </ul>
      </div>    
    );
  }
}

export default Lyrics;
