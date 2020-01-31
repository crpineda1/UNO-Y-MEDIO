import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator} from '../actions';

import Card from './Card'

class Hand extends Component {
 
  renderHand() {

    let playerHand
    let faceUp
    let cardClick

    switch (this.props.player) {
      case 1:
        playerHand = this.props.hand1
        faceUp = true
        cardClick = this.props.playCard
        break;
    
      case 2:
        playerHand = this.props.hand2
        faceUp = false
        cardClick = () => {}
        break;
    
      case 3:
        playerHand = this.props.hand3
        faceUp = false
        cardClick = () => {}
        break;
    
      case 4:
        playerHand = this.props.hand4
        faceUp = false
        cardClick = () => {}
        break;
    
      default:
        break;
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
    console.log("player#", this.props.player)
    return (
      <div className = "hand"> Hand {this.props.player}
      {this.renderHand()}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return { 
    hand1:state.hand1,
    hand2:state.hand2,
    hand3:state.hand3,
    hand4:state.hand4
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hand)