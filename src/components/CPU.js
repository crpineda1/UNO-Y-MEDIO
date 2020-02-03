import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, nextTurnCreator, pickCardCreator} from '../actions';

import Card from './Card'

class CPU extends Component {
 
  renderHand() {

    let playerHand
    let faceUp
    let cardClick
    let playCard

  
    playerHand = this.props[`hand${this.props.player}`]

    // check for win
    if (playerHand.length == 0 && this.props.gameActive ){
      console.log("winner:", this.props.player)
      this.props.checkWinner(this.props.player) // DISABLED, WILL TROUBLESHOOT LATER

    }
    
    this.props.player === this.props.turn? faceUp = true : faceUp = true  // change to true to see all cars up for testing
   
    console.log("player", this.props.player)
    console.log("turn", this.props.turn)
    console.log("game active:", this.props.gameActive)
    console.log("color:", this.props.currentColor)
    console.log("value:", this.props.currentValue)



    // CPU logic
    if (this.props.player === this.props.turn && this.props.gameActive){
      if (playerHand.find( card => card.color === this.props.currentColor)){
        playCard =  playerHand.find( card => card.color === this.props.currentColor)
      } else {
        if (playerHand.find( card => card.value === this.props.currentValue)) {
          playCard =  playerHand.find( card => card.value === this.props.currentValue)
        } else {
          if (playerHand.find( card => card.color === 'black')) {
            // playCard =  playerHand.find( card => card.color === 'black')
            playCard = "pick from pile"
          } else {
            playCard =  "pick from pile"

            setTimeout(() => {       // disable for testing
              this.props.pickCard()  
              this.props.nextTurn()
            }, 1000);
          }
        }
      }
       console.log("playCard", playCard)
       
       setTimeout(() => {
         this.props.playCard(playCard)  // disable for testing
         setTimeout(() => {
           this.props.wildCard("red")
           this.props.plus4("red")
           
         }, 1000);
       }, 1000); 
    } else {
      console.log("not my turn", this.props.player, this.props.turn)
    }



    if (this.props.player === this.props.turn){ // For human player wait for click event 
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
    gameActive: state.gameActive,
    currentColor: state.currentColor,
    currentValue: state.currentValue
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    nextTurn: () => dispatch(nextTurnCreator()),
    pickCard: () => dispatch(pickCardCreator()),
    nextTurn: () => dispatch(nextTurnCreator())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CPU)