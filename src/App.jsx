import React from 'react';
import {SongProvider} from './Context';
import Songs from './components/songs/Songs';

function App() {
  return (
    <SongProvider>
      <div className="App">
        <Songs />
      </div>
    </SongProvider>
  );
}

export default App;
