import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container'
import OriginalImage from './components/OriginalImage'

class App extends Component {
  render() {
    return (
      <div className="main-container">
          <div className="app__container">
                <Container/>
          </div>
          <OriginalImage/>
               
      </div>
     
    );
  }
}

export default App;
