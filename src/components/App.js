import React from 'react';
// import logo from './logo.svg';
// import '../App.css';
import { topCard } from '../actions'; // {} only for named expport, not default export
import Game from './Game'


function App() {
  return (
    <div>
      App UNO Y MEDIO
      <Game />
    </div>
  );
}

export default App;
