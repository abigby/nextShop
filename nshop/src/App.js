import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';


//COMPONENTS --------------------------------------------------------
import NextShopMap from './components/map'; 
import SearchBox from './components/search/searchBox';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <SearchBox />
        <NextShopMap/>
      </div>
    );
  }
}

export default App;
