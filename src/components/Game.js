import React, {Component} from 'react';
import {connect} from 'react-redux';


import Table from './Table'
import Navbar from './Navbar';
import {clearGameCreator} from '../actions';


class Game extends Component {

  toLeaderboard = () => {
    this.props.history.push("/leaderboard")
  }

  stopGame = () => {
    window.location.reload();
  }
  
  endGame = () => {

      this.props.clearGame()
      setTimeout(() => {
        this.props.history.push("/leaderboard")
      }, 100);

  }

  exit = () => {

     this.props.clearGame()
     setTimeout(() => {
       this.props.history.push("/")
     }, 100);

  }

  
  render () {

    return (
      <div className = "game">  
        <Navbar 
          exit = {this.exit} 
          endGame = {this.endGame} 
          leaderboard = {this.toLeaderboard} 
          stopGame = {this.stopGame}
        />
        <Table toLeaderboard = {this.toLeaderboard}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state: ", state)
 
  return { 
    // cards: state.cards,
    // deck: state.deck,
    // value: state.currentValue,
    // turn: state.turn,
    // color: state.currentColor,
    // action: state.actionCard,
    // order: state.orderClockwise,
    // unoPenalty: state.unoPenalty,
    // regCard: state.regCard,
    gameActive: state.gameActive,
    // allHands: [...state.hand1, ...state.hand2, ...state.hand3, ...state.hand4],
    // userId: state.userId


  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch",dispatch)
  return{
    clearGame: () => dispatch(clearGameCreator())

  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Game)