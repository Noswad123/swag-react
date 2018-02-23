import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './js/component/navbar.js';
import Footer from './js/component/footer.js';
import Home from './js/pages/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
         <Footer />
      </div>
    );
  }
}

export default App;
