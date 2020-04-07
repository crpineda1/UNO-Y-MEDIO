import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, nextTurnCreator} from '../actions';

import Card from './Card'


class Hand extends Component {
 
  renderHand() {

    let playerHand
    let faceUp = this.props.faceUp
    let cardClick
 
    playerHand = this.props[`hand${this.props.player}`]

    // show cards (face up)
    // this.props.player === this.props.turn? faceUp = true : faceUp = true  // change to true to see all cars up for testing
    
    // check for win
    if (playerHand.length === 0 && this.props.gameActive ){
      // console.log("winner:", playerName)

      this.props.declareWinner(this.props.player) 
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
    return playerHand.map((eachCard, i) => {
      return ( 

        <Card 
          reff = {`${this.props.player}_${eachCard.code}`}
          parent = {`Hand${this.props.player}`}
          index={i} 
          card = {eachCard} 
          visible = {faceUp} 
          handleClick = {cardClick}
        />

      )
    })
  }
  
  render () {
    return (
      <div  className = {`hand${this.props.player}`} > {this.props[`name${this.props.player}`]}
        <div id = {this.props.player} className = "handCards">
        {this.renderHand()}

        </div>
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
    name1: state.player1,
    name2: state.player2,
    name3: state.player3,
    name4: state.player4,
    userId1: state.userId1,
    userId2: state.userId2,
    userId3: state.userId3,
    userId4: state.userId4,
    turn: state.turn,
    gameActive: state.gameActive,
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    nextTurn: () => dispatch(nextTurnCreator()),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hand)