import React, {Component} from 'react'
import {connect} from 'react-redux';
import {pickCardCreator} from '../actions';

import Card from './Card'



class Deck extends Component {
  
  handleClick = (card) => {
    this.props.pickCard()
    this.props.drawCard(card)
  }
  
  render () {
    
    let faceUp = false // swtich to true to see the top card in the deck


    return (
      <div className = "deck"> Deck 
      <Card card = {this.props.deck[0]} visible = {faceUp} handleClick = {() => this.handleClick(this.props.deck[0])}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { 
    deck: state.deck
  }  
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    pickCard: () => dispatch(pickCardCreator())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck)