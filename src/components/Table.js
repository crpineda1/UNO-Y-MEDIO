import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createDeckCreator, playCardCreator, pickCardCreator, nextTurnCreator, changeColorCreator, actionOffCreator, pileCardCreator, unoCallCreator, toggleGameCreator, saveGameCreator,} from '../actions';
import Deck from './Deck';
import Pile from './Pile';
import Hand from './Hand';

import AI from './AI';


class Table extends Component {
  HumanPlayers = [] //reset to [1]
  AiPlayers = [1,2,3,4] // reset to [2,3,4]


  shuffleDeck = (deck) => {
    let oldDeck = [...deck]
    return oldDeck.sort(() => Math.random() - 0.5)
  }

  dealCards = () => {
    let delay = 150   // reset to 150 for game play
    let cards = 28    // reset to 28 for game play
    
    if (!this.props.gameActive){

     for (let i = 0; i < cards; i++) { 
       setTimeout(() => {
         this.props.pickCard()
         this.props.nextTurn()
         // console.log("deal counter", i)        
       }, i * delay);  
     }

     setTimeout(() => {
       this.props.pileCard()
       while(["R","S","22","44","WC"].includes(this.props.value)){
         this.props.pileCard()
       }  
       this.props.toggleGame()
     }, (cards+1) * delay)
   }
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
    alert("Play a card that matches the color or symbol in the pile, or draw from the deck until you get a car you can play.  Reverse card changest the direction of play. Skip forces the next player to forfeit thier turn. Draw Two cards forces the next player to draw two cards and forfeit their turn.  Wild cards allow you to change the color. Wild Draw Four cards allows you to change the color and forces the next player to draw four cards and forfeit thier turn. Don't forget to call UNO Y MEDIO when you have one card or you will have to pick 4 cards from the deck.")
  }
  
  declareWinner = (player) => {
    let cardPoints = this.props.allHands.map(card => card.points)
    let totalPoints = cardPoints.reduce((acc, pts) => acc + pts)
    let playerName = this.props[`player${player}`]
    let playerId = this.props[`userId${player}`]
    console.log("winner",player,playerName,playerId, totalPoints)
    this.props.saveGame({id: playerId, game:this.props.gameId, name: playerName, points: totalPoints})
    alert(`${playerName} WINS ${totalPoints} POINTS`)
    this.props.toLeaderboard()


    
  }
  
  displayColorButtons = (turn) => {
    if(this.HumanPlayers.includes(turn)){
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
    if (this.AiPlayers.includes(this.props.turn) && this.props.gameActive){
      // console.log("AI ENGAGED", this.props.turn)
      AiPlayer = <div>{this.AiMove(this.props.turn)}</div>
    }

    

    return (
      <div className = "table"> Table 
        <div className = "colorIndicator" > Current Color <img className = {this.props.color} /> </div>
        <div className = "directionIndicator" > Direction: <br/> {this.props.order? "CLOCKWISE":"COUNTER CLOCKWISE"}</div>
        <div className = "turnIndicator" >Current Turn: <br/>{this.props[`player${this.props.turn}`]}</div>
        <button onClick = {this.showRules}>RULES</button>
        <button onClick = {this.dealCards}>NEW GAME</button>
        <button onClick = {this.props.unoCall}>UNO CALL</button>
        <button onClick = {this.pass}>PASS</button>
        {this.displayColorButtons(this.props.turn)}
        {this.gameAction()}

        
        <div className = "tableItems"> 
          <Deck className = "deck" topCard = {newDeck[0]}/>
          <Pile className = "pile" />
          <div className = "hands">
          <Hand  player = {1} declareWinner = {this.declareWinner}/>
          <Hand  player = {2} declareWinner = {this.declareWinner}/>
          <Hand  player = {3} declareWinner = {this.declareWinner}/>
          <Hand  player = {4} declareWinner = {this.declareWinner}/>
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
  // console.log("AI Active?", state.gameActive)

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
    gameActive: state.gameActive,
    allHands: [...state.hand1, ...state.hand2, ...state.hand3, ...state.hand4],
    gameId: state.gameId,
    userId1: state.userId1,
    userId2: state.userId2,
    userId3: state.userId3,
    userId4: state.userId4,
    player1: state.player1,
    player2: state.player2,
    player3: state.player3,
    player4: state.player4,


  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch", dispatch)
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
    saveGame: (player) => dispatch(saveGameCreator(player)),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
 