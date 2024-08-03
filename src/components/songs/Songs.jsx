import React, { useContext, useEffect } from 'react';
import { SongContext } from '../../Context';

const Songs = () => {
  const { songs, loading, fetchSongs } = useContext(SongContext);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {songs.map((song) => (
        <div key={song.track.track_id}>{song.track.track_name}</div>
      ))}
    </div>
  );
};

export default Songs;
