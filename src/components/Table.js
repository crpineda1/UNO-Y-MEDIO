import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createDeckCreator, dealCardsCreator, playCardCreator, pickCardCreator, nextTurnCreator} from '../actions';


import Hand from './Hand';
import Deck from './Deck';
import Pile from './Pile';


class Table extends Component {
  
  shuffleDeck = (deck) => {
    let oldDeck = [...deck]
    return oldDeck.sort(() => Math.random() - 0.5)
  }

  dealCards = () => {
    for (let i = 0;  i < 28; i++) {  // RESET TO 28 ONCE DONE TESTING
      this.props.pickCard()
      this.props.nextTurn()
      
    }
  }

  plus2 = () => {
    if(this.props.value === "22") {
      console.log("pick2")
      this.props.pickCard()
      this.props.pickCard()
      this.props.nextTurn()
    }
  }



  render () {
    let newDeck = this.shuffleDeck(this.props.cards)

    if (this.props.deck.length === 0){
      this.props.createDeck(newDeck) // DISABLE FOR TESTING WITH SAMPLE DECK OF SPECIFIC CARDS
    }
    

    // console.log("TopCard",newDeck[0])

    return (
      <div> Table 
        <button onClick = {this.plus2}>plus 2</button>
        <button onClick = {this.dealCards}>Deal Cards</button>
        <div className = "table"> 
          <Deck topCard = {newDeck[0]}/>
          <Pile />
          <div className = "hands">
          <Hand player = {1} />
          <Hand player = {2} />
          <Hand player = {3} />
          <Hand player = {4} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  console.log("Order", state.turn)
  console.log("VALUE", state.currentValue)
  console.log("TURN", state.turn)
  return { 
    cards: state.cards,
    deck: state.deck,
    value: state.currentValue,
    turn: state.currentTurn



          }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (deck) => dispatch(createDeckCreator(deck)),
    dealCards: () => dispatch(dealCardsCreator()),
    playCard: () => dispatch(playCardCreator()),
    pickCard: () => dispatch(pickCardCreator()),
    nextTurn: () => dispatch(nextTurnCreator()),


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)