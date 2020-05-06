import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Devices from './Devices';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:1};
    // const var1 = this.props.var1.name;
    
  }
  render () {
    
  return (
    
  <Router>     
    <div>
    <Nav />
    <Switch>
    {console.log(this.props.database)}
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about" component={About} />                   
      <Route exact path="/devices" render={() => <Devices database={this.props.database}/>} />              
    </Switch>
    </div>
  </Router>
  );
}
}

/* function App() {
  return (
    <Router>     
      <div>
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
 */

export default App;
