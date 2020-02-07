import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, nextTurnCreator} from '../actions';

import Card from './Card'

class Hand extends Component {
 
  renderHand() {

    let playerHand
    let playerName
    let faceUp
    let cardClick
 
    playerHand = this.props[`hand${this.props.player}`]
    playerName = this.props[`player${this.props.player}`] 

    // show cards (face up)
    this.props.player === this.props.turn? faceUp = true : faceUp = true  // change to true to see all cars up for testing
    
    // check for win
    if (playerHand.length === 0 && this.props.gameActive ){
      // console.log("winner:", playerName)
      this.props.checkWinner(playerName) 
    }
     
    // activate card play when its your turn
    if (this.props.player === this.props.turn){
      cardClick = (card) => { 
        this.props.playCard(card)
      }
    }else{
      cardClick = () => {}
    }

    // render cards
    return playerHand.map((eachCard) => {
      return ( 
       <div>
         <Card card = {eachCard} visible = {faceUp} handleClick = {cardClick}/>
       </div> 
      )
    })
  }
  
  render () {
    return (
      <div className = "hand"> Hand {this.props.player}
        {this.renderHand()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("hand1", state.hand1)
  // console.log("hand2", state.hand2)
  // console.log("hand3", state.hand3)
  // console.log("hand4", state.hand4)
  // console.log("turn", state.turn)
  // console.log("gameActive", state.gameActive)
  
  return { 
    hand1: state.hand1,
    hand2: state.hand2,
    hand3: state.hand3,
    hand4: state.hand4,
    player1: state.player1,
    player2: state.player2,
    player3: state.player3,
    player4: state.player4,
    turn: state.turn,
    gameActive: state.gameActive
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    nextTurn: () => dispatch(nextTurnCreator()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hand)