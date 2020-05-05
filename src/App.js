import React from 'react';
import Nav from './Nav';
import About from './About';
import Devices from './Devices';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const appStyle = {
    textAlign: 'center'
  }

  return (
    <Router>
      <div style = {appStyle}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" exact component={About} /> 
          <Route path="/devices" exact component={Devices} />        
        </Switch>
      </div>
    </Router>
  );
}

const Home =() => (
    <div>
      <h1>Home Page</h1>
    </div>
);

export default App;
