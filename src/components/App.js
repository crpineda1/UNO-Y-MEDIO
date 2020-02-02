import React from 'react';
// import logo from './logo.svg';
// import '../App.css';
// import { topCard } from '../actions'; // {} only for named expport, not default export
import Game from './Game'
import Auth from './Auth';
import Leaderboard from './Leaderboard';
import {Switch, Route, Redirect} from 'react-router-dom'

import logo from '../images/_UNO_Y_MEDIO_logo.png'



function App() {
  return (
    <div>
      App UNO Y MEDIO
      
      <Switch>
        <Route exact path="/" render={() => <img src= {logo} />} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/leaderboard" component={Leaderboard}/>
        <Route exact path="/game" component={Game}/>

      </Switch>
    </div>
  );
}

export default App;
