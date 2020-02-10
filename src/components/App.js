import React from 'react';
// import logo from './logo.svg';
// import '../App.css';
// import { topCard } from '../actions'; // {} only for named expport, not default export
import Game from './Game'
import Auth from './Auth';
import Leaderboard from './Leaderboard';
import {Switch, Route} from 'react-router-dom'





function App() {
  return (
    <div>
      <Switch>

        <Route exact path="/" component={Auth} />
        <Route exact path="/leaderboard" component={Leaderboard}/>
        <Route exact path="/game" component={Game}/>

      </Switch>
    </div>
  );
}

export default App;
