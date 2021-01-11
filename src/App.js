import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import KalCal from './components/KalCal';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/kalcal" component={KalCal} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Signin} />
          <Route path="/nav" component={Nav} />
          <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
