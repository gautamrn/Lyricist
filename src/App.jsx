import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/setup/Navbar';
import Index from './components/setup/Index';
import Lyrics from './components/songs/Lyrics';

import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;