import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Login />
      </div>
    )
  }
}

export default App;