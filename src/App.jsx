import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/setup/Navbar';
import Index from './components/setup/Index';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
