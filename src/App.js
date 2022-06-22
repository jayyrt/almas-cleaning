import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Calendar from './Components/Calendar/Calendar';
import User from './Components/User/User';
import './App.css';

class App extends Component {
  render() {
    return (
     <HashRouter>
       <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/services' component={Services} />
        <Route path='/my-calendar' component={Calendar} />
        <Route path='/user-info' component={User} />
       </Switch>
     </HashRouter>
    );
  }
}

export default App;