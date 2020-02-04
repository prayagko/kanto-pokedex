import React from 'react';
import Search from './Search'
import {Router, Link} from '@reach/router';
import Details from './Details'
import './App.css';

function App() {

  return (
    <div className="main">
      <div className="header">
        <Link to="/">
          <img className ="pokeball" src="/images/Pokeball.png" alt="pokeball"></img>
        </Link>
      </div>
      <Router>
        <Search path="/"/>
        <Details path="/details/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
