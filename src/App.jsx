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
        <div className="App bg-zinc-600 text-white min-h-screen">
          <Navbar />
          <div className='container mx-auto px-4 py-6'>
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
