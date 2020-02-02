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
    
    this.props.player === this.props.turn? faceUp = true : faceUp = false  // change to true to see all cars up for testing
    
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
  // console.log("state", state)
  return { 
    hand1: state.hand1,
    hand2: state.hand2,
    hand3: state.hand3,
    hand4: state.hand4,
    turn: state.turn
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    nextTurn: () => dispatch(nextTurnCreator()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hand)