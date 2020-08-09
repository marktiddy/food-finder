import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Food Finder" alt="logo" />
      </header>
      <Search />
    </div>
  );
}

export default App;
