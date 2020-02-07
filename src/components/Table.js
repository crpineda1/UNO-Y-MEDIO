import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createDeckCreator, playCardCreator, pickCardCreator, nextTurnCreator, changeColorCreator, actionOffCreator, pileCardCreator, unoCallCreator, toggleGameCreator,} from '../actions';
import Deck from './Deck';
import Pile from './Pile';
import Hand from './Hand';

import AI from './AI';


class Table extends Component {
  
  shuffleDeck = (deck) => {
    let oldDeck = [...deck]
    return oldDeck.sort(() => Math.random() - 0.5)
  }

  dealCards = () => {
    let delay = 150   // reset to 150 for game play
    let cards = 28    // reset to 28 for game play
    for (let i = 0; i < cards; i++) { 
      setTimeout(() => {
        this.props.pickCard()
        this.props.nextTurn()
        // console.log("deal counter", i)        
      }, i * delay);
      
    }
    setTimeout(() => {
      this.props.pileCard()
      if(["R","S","22","44","WC"].includes(this.props.value)){
        this.props.pileCard()
      }  
      this.props.toggleGame()
    }, (cards+1) * delay)

  }

  gameAction = () =>{
    
    // activate plus2 
    if(this.props.value === "22" && this.props.action) {
      // console.log("pick2")
      // this.props.toggleGame()
      this.props.nextTurn()
      this.props.pickCard()
      this.props.pickCard()
      this.props.actionOff()
      this.props.nextTurn()
      this.props.toggleGame()
    } 
    
    // activate skip
    if(this.props.value === "S" && this.props.action) {
      console.log("skip turn")
      this.props.actionOff()
      // this.props.toggleGame()
      this.props.nextTurn()
      this.props.nextTurn()
      this.props.toggleGame()
    }
    
    
    //  activate UNO call penalty
    if (this.props.unoPenalty) {
      alert(`UNO CALL PENALTY. Player ${this.props.turn} DRAW 4 CARDS`)
      // this.props.toggleGame()
      this.props.actionOff() // disables action of skip if applicable 
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      // this.props.toggleGame()
      // this.props.nextTurn()
      
    } 
    
    if (["0","1","2","3","4","5","6","7","8","9","R"].includes(this.props.value) && this.props.regCard ) {
      this.props.actionOff()
      this.props.nextTurn()
      this.props.toggleGame()
    }
    
      // end of game action
  }
  
  plus4 = (color) => {
    if(this.props.value === "44") {
      // console.log("new color", color)
      this.props.changeColor(color)
      // console.log("pick4")
      // this.props.toggleGame()
      this.props.nextTurn()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.pickCard()
      this.props.nextTurn()
      this.props.toggleGame()
    }
  }
  
  wildCard = (color) =>{
    if(this.props.value === "WC"){
      // console.log("wild card")
      // console.log("new color", color)
      this.props.changeColor(color)
      // this.props.toggleGame()
      this.props.nextTurn()
      this.props.toggleGame()
    }
  }
  
  pass = () => {
    this.props.nextTurn()
    // this.props.toggleGame()
  }
  
  showRules = () => {
    alert("You can only play a card that matches the color or symbol in the pile. Wild cards allow you to alter the color. Draw Two cards forces the next player to draw two cards and forfeit his/her turn. Wild Draw Four cards allows you to alter the color and forces the next player to draw four cards and forfeit thier turn. Reverse card changest the direction of play. Skip forces the next player to forfeit thier turn.")
  }
  
  checkWinner = (player) => {
    alert(`PLAYER ${player} WINS`)
    this.props.endGame()
    
  }
  
  displayColorButtons = (turn) => {
    if([].includes(turn)){
      if (this.props.value === "WC" && this.props.color === "black") {
        // console.log('WC buttons')
        return <div>
        <button onClick= {() => this.wildCard("red")}>Switch Red WC</button>
        <button onClick= {() => this.wildCard("yellow")}>Switch Yellow WC</button>
        <button onClick= {() => this.wildCard("blue")}>Switch Blue WC</button>
        <button onClick= {() => this.wildCard("green")}>Switch Green WC</button>
        </div>  
      } else if (this.props.value === "44" && this.props.color === "black") {
        // console.log('+4 buttons')
        return <div>
        <button onClick= {() => this.plus4("red")}>Switch Red +4</button>
        <button onClick= {() => this.plus4("yellow")}>Switch Yellow +4</button>
        <button onClick= {() => this.plus4("blue")}>Switch Blue +4</button>
        <button onClick= {() => this.plus4("green")}>Switch Green +4</button>
        </div>  
      }
    }    
  }
  
  AiMove = (turn) => {
    return <AI player = {turn} wildCard = {this.wildCard} plus4 = {this.plus4} unoCall = {this.props.unoCall}/>
  
  }
  

  render () {
    let newDeck = this.shuffleDeck(this.props.cards)

    if (this.props.deck.length === 0){
      this.props.createDeck(newDeck) 
    }

    let AiPlayer 
    if ([1,2,3,4].includes(this.props.turn) && this.props.gameActive){
      // console.log("AI ENGAGED", this.props.turn)
      AiPlayer = <div>{this.AiMove(this.props.turn)}</div>
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
        {this.displayColorButtons(this.props.turn)}
        {this.gameAction()}

        
        <div className = "table"> 
          <Deck topCard = {newDeck[0]}/>
          <Pile />
          <div className = "hands">
          <Hand type = {"Hand"} player = {1} checkWinner = {this.checkWinner}/>
          <Hand type = {"Hand"} player = {2} checkWinner = {this.checkWinner}/>
          <Hand type = {"Hand"} player = {3} checkWinner = {this.checkWinner}/>
          <Hand type = {"Hand"} player = {4} checkWinner = {this.checkWinner}/>
         {AiPlayer}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state: ", state)
  // console.log("VALUE: ", state.currentValue)
  // console.log("TURN: ", state.turn)
  // console.log("Order Clockwise? ", state.orderClockwise)
  // console.log("color: ", state.currentColor)
  // console.log("uno call: ", state.unoCall)
  // console.log("uno penalty: ", state.unoPenalty)
  // console.log("action activated: ", state.actionCard)
  console.log("AI Active?", state.gameActive)

  return { 
    cards: state.cards,
    deck: state.deck,
    value: state.currentValue,
    turn: state.turn,
    color: state.currentColor,
    action: state.actionCard,
    order: state.orderClockwise,
    unoPenalty: state.unoPenalty,
    regCard: state.regCard,
    gameActive: state.gameActive


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (deck) => dispatch(createDeckCreator(deck)),
    playCard: () => dispatch(playCardCreator()),
    pickCard: () => dispatch(pickCardCreator()),
    nextTurn: () => dispatch(nextTurnCreator()),
    changeColor: (color) => dispatch(changeColorCreator(color)),
    actionOff: () => dispatch(actionOffCreator()),
    pileCard: () => dispatch(pileCardCreator()),
    unoCall: () => dispatch(unoCallCreator()),
    toggleGame: () => dispatch(toggleGameCreator()),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
 