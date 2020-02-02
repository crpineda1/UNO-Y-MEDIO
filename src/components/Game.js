import React, {Component} from 'react';
import Table from './Table'
import { connect } from 'react-redux';

import Navbar from './Navbar';


class Game extends Component {

  endGame = () => {this.props.history.push("/leaderboard")}
  logOut = () => {this.props.history.push("/auth")}
  
  render () {
    // this.props === {deck: state.deck} 
    console.log("game props",this.props)
    console.log("game props",this.props.deck)
    return (
      <div> Game 
        <Navbar logout = {this.logOut}/>
        <Table endGame = {this.endGame}/>

      </div>
    )
  }
}



export default Game