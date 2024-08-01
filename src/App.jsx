import React from 'react'
import './App.css';

import Navbar from './components/setup/Navbar';
import Index from './components/setup/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path = '/' component = {Index} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
