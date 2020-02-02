import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createDeckCreator, dealCardsCreator, playCardCreator, pickCardCreator, nextTurnCreator, changeColorCreator, actionOffCreator, pileCardCreator} from '../actions';


import Hand from './Hand';
import Deck from './Deck';
import Pile from './Pile';


class Table extends Component {
  
  shuffleDeck = (deck) => {
    let oldDeck = [...deck]
    return oldDeck.sort(() => Math.random() - 0.5)
  }

  dealCards = () => {
    let i = 0
    
    for (let i = 0; i < 28; i++) {

        this.props.pickCard()
        this.props.nextTurn()
        console.log("deal counter", i)        

    }

    this.props.pileCard()
    }

  plus2 = () => {
    if(this.props.value === "22" && this.props.action) {
      console.log("pick2")
      this.props.pickCard()
      this.props.pickCard()
      this.props.nextTurn()
      this.props.actionOff()
    }
  }

  plus4 = (color) => {
    if(this.props.value === "44") {
      console.log("new color", color)
      this.props.changeColor(color)
      console.log("pick4")
      this.props.nextTurn()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.nextTurn()
    }
  }

  wildCard = (color) =>{
    if(this.props.value === "WC"){
      console.log("wild card")
      console.log("new color", color)
      this.props.changeColor(color)
      this.props.nextTurn()
    }
  }



  displayColorButtons = () => {
    console.log("display color buttons")
    console.log(this.props.color)

    if (this.props.value === "WC" && this.props.color === "black") {
      console.log('WC buttons')
      return <div>
      <button onClick= {() => this.wildCard("red")}>Switch Red WC</button>
      <button onClick= {() => this.wildCard("yellow")}>Switch Yellow WC</button>
      <button onClick= {() => this.wildCard("blue")}>Switch Blue WC</button>
      <button onClick= {() => this.wildCard("green")}>Switch Green WC</button>
      </div>  
    } else if (this.props.value === "44" && this.props.color === "black") {
      console.log('+4 buttons')
      return <div>
      <button onClick= {() => this.plus4("red")}>Switch Red +4</button>
      <button onClick= {() => this.plus4("yellow")}>Switch Yellow +4</button>
      <button onClick= {() => this.plus4("blue")}>Switch Blue +4</button>
      <button onClick= {() => this.plus4("green")}>Switch Green +4</button>
      </div>  
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
        <div>Current Color {this.props.color}</div>
        <div>Direction: {this.props.order? "CLOCKWISE":"COUNTER CLOCKWISE"}</div>
        <button onClick = {this.dealCards}>Deal Cards</button>
        {this.plus2()}
        {this.displayColorButtons()}
        
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
  console.log("Order Clockwise?", state.orderClockwise)
  console.log("VALUE", state.currentValue)
  console.log("TURN", state.turn)
  console.log("color", state.currentColor)
  console.log("hand 4 #", state.hand4.length)
  return { 
    cards: state.cards,
    deck: state.deck,
    value: state.currentValue,
    turn: state.turn,
    color: state.currentColor,
    action: state.actionCard,
    order: state.orderClockwise,


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (deck) => dispatch(createDeckCreator(deck)),
    dealCards: () => dispatch(dealCardsCreator()),
    playCard: () => dispatch(playCardCreator()),
    pickCard: () => dispatch(pickCardCreator()),
    nextTurn: () => dispatch(nextTurnCreator()),
    changeColor: (color) => dispatch(changeColorCreator(color)),
    actionOff: () => dispatch(actionOffCreator()),
    pileCard: () => dispatch(pileCardCreator()),


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)