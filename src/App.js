import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';

class App extends Component {
  render() {
    return (
     <HashRouter>
       <Switch>
        <Route path='/' component={Login} exact />
       </Switch>
     </HashRouter>
    );
  }
}

export default App;