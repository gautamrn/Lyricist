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
      <div className="p-6 bg-black text-white rounded-md shadow-custom">
        <Link to="/" className="text-white bg-gray-custom hover:bg-light-blue p-2 rounded-md mb-4 inline-block">
          Back
        </Link>
        <div className='bg-gray-custom rounded-md shadow-custom p-4'>
            <h5 className="text-2xl font-bold mb-4">
              {track.track_name} by <span className="text-light-gray">{track.artist_name}</span>
            </h5>
            <div className='text-lg'>
                <p className='whitespace-pre-wrap'>{lyrics.lyrics_body}</p>
            </div>
        </div>
        <ul className='mt-4 space-y-2'>
            <li className='bg-gray-custom p-2 rounded-md'>
                <strong>Genre: </strong>{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
            </li>
            <li className='bg-gray-custom p-2 rounded-md'>
              <strong>Explicit?: </strong>
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className='bg-gray-custom p-2 rounded-md'>
              <strong>Release Date: </strong>
              <Moment format='MM/DD/YYYY'>{track.first_release_date}</Moment>
            </li>
        </ul>
      </div>    
    );
  }
}

export default Lyrics;
