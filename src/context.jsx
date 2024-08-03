import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSongs = async () => {
    try {
      console.log('Fetching songs...');
      const response = await axios.get('https://api.musixmatch.com/ws/1.1/chart.tracks.get', {
        params: {
          apikey: process.env.REACT_MM_KEY, // Replace with your actual API key
          chart_name: 'top',
          page: 1,
          page_size: 10,
          country: 'us',
          f_has_lyrics: 1,
        },
      });
      console.log('Response:', response.data);
      setSongs(response.data.message.body.track_list);
      console.log('Songs:', response.data.message.body.track_list);
    } catch (error) {
      console.error('Error fetching songs:', error);
    } finally {
      setLoading(false);
      console.log('Loading set to false');
    }
  };

  return (
    <SongContext.Provider value={{ songs, loading, fetchSongs }}>
      {children}
    </SongContext.Provider>
  );
};
