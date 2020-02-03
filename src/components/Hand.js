import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, nextTurnCreator} from '../actions';

import Card from './Card'

class Hand extends Component {
 
  renderHand() {

    let playerHand
    let faceUp
    let cardClick
 

  
    playerHand = this.props[`hand${this.props.player}`]

    // check for win
    if (playerHand.length == 0 && this.props.gameActive ){
      console.log("winner:", this.props.player)
      this.props.checkWinner(this.props.player) // DISABLED, WILL TROUBLESHOOT LATER

    }
    
    this.props.player === this.props.turn? faceUp = true : faceUp = true  // change to true to see all cars up for testing
    
    if (this.props.player === this.props.turn){
      cardClick = (card) => { 
        this.props.playCard(card)
      }
    }else{
      cardClick = () => {}
    }

    
    return playerHand.map((eachCard) => {
      return ( 
       <div>
         <Card card = {eachCard} visible = {faceUp} handleClick = {cardClick}/>
       </div> 
      )
    })
  }
  
  render () {
    // console.log("player#", this.props.player)
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