import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Poultry from './components/Poultry';
import Feed from './components/Feed';
import Frozenfood from './components/Frozenfood';
import Grains from './components/Grains';
import Tubers from './components/Tubers';



class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/poultry" component={Poultry} />
          <Route path="/feed" component={Feed} />
          <Route path="/frozenfood" component={Frozenfood}/>
          <Route path="/grains" component={Grains} />
          <Route path="/tubers" component={Tubers} />
        </Switch>
        
      </React.Fragment>

    );
  }
}

export default App;
