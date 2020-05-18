import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Devices from './Devices';
import deviceDetail from './deviceDetail';
import EditDevice from './EditDevice';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() { 
  
  return (    
    <Router>     
      <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} />                   
        <Route exact path="/devices" component={Devices} />   {/* render={() => <DeviceDetail database={this.props.database}/>} /> */}
        <Route exact path="/devices/:id" component={deviceDetail} />
        <Route exact path="/edit/:id" component={EditDevice} />        
      </Switch>
      </div>
    </Router>
  );
}
export default App;
