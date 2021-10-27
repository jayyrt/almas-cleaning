import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Calendar from './Components/Calendar/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
     <HashRouter>
       <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/my-calendar' component={Calendar} />
       </Switch>
     </HashRouter>
    );
  }
}

export default App;