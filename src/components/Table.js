import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createDeckCreator, dealCardsCreator, playCardCreator, pickCardCreator, nextTurnCreator, changeColorCreator, actionOffCreator, pileCardCreator, unoCallCreator} from '../actions';

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
    let delay = 150

    for (let i = 0; i < 28; i++) {
      setTimeout(() => {
        this.props.pickCard()
        this.props.nextTurn()
        console.log("deal counter", i)        
      }, i * delay);

    }
    setTimeout(() => {
      this.props.pileCard()
    }, 28 * delay);
    }

  plus2 = () => {
    if(this.props.value === "22" && this.props.action) {
      console.log("pick2")
      this.props.pickCard()
      this.props.pickCard()
      this.props.actionOff()
      this.props.nextTurn()
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
    // console.log("display color buttons")
    // console.log(this.props.color)

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
  
  unoCallPenalty = () => {
    if (this.props.unoPenalty) {
      alert("UNO CALL PENALTY, DRAW 4 CARDS")
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.actionOff() // disables action of skip if applicable 
      this.props.nextTurn()

    }
  }

  pass = () => {
    this.props.nextTurn()
  }

  skipTurn = () => {
    if(this.props.value === "S" && this.props.action) {
      console.log("skip turn")
      this.props.nextTurn()
      this.props.actionOff()
    }
  }

  showRules = () => {
    alert("You can only play a card that matches the color or symbol in the pile. Wild cards allow you to alter the color. Draw Two cards forces the next player to draw two cards and forfeit his/her turn. Wild Draw Four cards allows you to alter the color and forces the next player to draw four cards and forfeit thier turn. Reverse card changest the direction of play. Skip forces the next player to forfeit thier turn.")
  }

  checkWinner = (player) => {
    alert(`PLAYER ${player} WINS`)
    this.props.endGame()
  }


  render () {
    let newDeck = this.shuffleDeck(this.props.cards)

    if (this.props.deck.length === 0){
      this.props.createDeck(newDeck) 
    }

    return (
      <div> Table 
        <div>Current Color: {this.props.color}</div>
        <div>Direction: {this.props.order? "CLOCKWISE":"COUNTER CLOCKWISE"}</div>
        <div>Current Turn: {this.props.turn}</div>
        <button onClick = {this.showRules}>RULES</button>
        <button onClick = {this.dealCards}>DEAL CARDS</button>
        <button onClick = {this.props.unoCall}>UNO CALL</button>
        <button onClick = {this.pass}>PASS</button>
        {this.plus2()}
        {this.displayColorButtons()}
        {this.unoCallPenalty()}
        {this.skipTurn()}
        
        <div className = "table"> 
          <Deck topCard = {newDeck[0]}/>
          <Pile />
          <div className = "hands">
          <Hand player = {1} checkWinner = {this.checkWinner}/>
          <Hand player = {2} checkWinner = {this.checkWinner}/>
          <Hand player = {3} checkWinner = {this.checkWinner}/>
          <Hand player = {4} checkWinner = {this.checkWinner}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state: ", state)
  console.log("VALUE: ", state.currentValue)
  console.log("TURN: ", state.turn)
  console.log("Order Clockwise? ", state.orderClockwise)
  console.log("color: ", state.currentColor)
  console.log("uno call: ", state.unoCall)
  console.log("uno penalty: ", state.unoPenalty)
  console.log("action activated: ", state.actionCard)

  return { 
    cards: state.cards,
    deck: state.deck,
    value: state.currentValue,
    turn: state.turn,
    color: state.currentColor,
    action: state.actionCard,
    order: state.orderClockwise,
    unoPenalty: state.unoPenalty


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
    unoCall: () => dispatch(unoCallCreator()),


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)