import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coming Soon</h1>
          <img src={'http://www.electriccitybakehouse.com/wp-content/uploads/2017/08/ECBH-logo-01-300x206.png'} className="App-logo" alt="logo" />
          <p className="App-intro">
            Modern cakery specializing in innovative designs and custom cakes + cupcakes.
          </p>
          <hr className="App-hr"></hr>
          <p className="App-sub-intro">
            314 Penn Avenue • Scranton, Pennsylvania
          </p>
        </header>
      </div>
    );
  }
}

export default App;
