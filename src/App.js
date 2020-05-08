import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Devices from './Devices';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() { 
  
  return (    
    <Router>     
      <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} />                   
        <Route exact path="/devices" component={Devices} />   {/* render={() => <Devices database={this.props.database}/>} /> */}              
      </Switch>
      </div>
    </Router>
  );
}
export default App;
