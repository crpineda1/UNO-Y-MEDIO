import React, {Component} from 'react'
import {connect} from 'react-redux';
import {pickCardCreator, setRefDeckCreator} from '../actions';

import Card from './Card'



class Deck extends Component {
  

  
  handleClick = (card) => {
    this.props.pickCard()

  }

  render () {
    
    let faceUp = true // swtich to true to see the top card in the deck


    return (
      <div className = "deck"> Deck 
      <Card 
        parent = "Deck"
        class = {`Hand1`}
        card = {this.props.deck[0]} 
        visible = {faceUp} 
        handleClick = {() => this.handleClick(this.props.deck[0])}
        ref = {this.props.setRefDeck(this)}
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { 
    deck: state.deck,
    turn: state.turn
  }  
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    pickCard: () => dispatch(pickCardCreator()),
    setRefDeck: (ref) => dispatch(setRefDeckCreator(ref))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck)