import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearGameCreator} from '../actions';

import Table from './Table'
import Navbar from './Navbar';


class Game extends Component {

  endGame = () => {
    // this.props.clearGame()
    this.props.history.push("/leaderboard")
    
  }
  logOut = () => {
    this.props.history.push("/")
  }

  
  render () {
    // this.props === {deck: state.deck} 
    // console.log("game props",this.props)
    // console.log("game props",this.props.deck)
    return (
      <div> Game 
        <Navbar logout = {this.logOut} leaderboard = {this.endGame}/>
        <Table endGame = {this.endGame}/>

      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return{
    clearGame: () => dispatch(clearGameCreator()),
  }
}




export default connect(mapDispatchToProps)(Game)