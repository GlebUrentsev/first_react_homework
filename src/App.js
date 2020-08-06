import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Events from './components/FullEvents';
import Event from './components/Event';
class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Events}/>
          <Route exact path='/:number' component={Event}/>
        </Switch>
      </Router>
    )
  }
}
export default App;
