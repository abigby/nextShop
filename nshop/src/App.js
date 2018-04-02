import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//COMPONENTS --------------------------------------------------------
import NextShopMap from './components/map';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <NextShopMap/>
      </div>
    );
  }
}

export default App;
