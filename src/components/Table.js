import React, {Component} from 'react';
import {connect} from 'react-redux';


import {createDeckCreator, playCardCreator, pickCardCreator, nextTurnCreator, changeColorCreator, actionOffCreator, pileCardCreator, unoCallCreator, toggleGameCreator, saveGameCreator} from '../actions';
import Deck from './Deck';
import Pile from './Pile';
import Hand from './Hand';
import CPU from './CPU';

// set players to human or CPU
let HumanPlayers = [1] //1P: [1] Demo: []
let CpuPlayers = [2,3,4] // 1P: [2,3,4] Demo: [1,2,3,4]

// display cards
let faceUpP1 = true
let faceUpP2 = false
let faceUpP3 = false
let faceUpP4 = false
let faceUpDeck = false

// for dealing
const dealDelay = 200   // reset to 200 for game play
const cards = 28    // reset to 28 for game play

// for CPU
const CPUDelay = 2000 // milliseconds *** reset to 2000 ***

class Table extends Component {

  shuffleDeck = (deck) => {
    let oldDeck = [...deck]
    return oldDeck.sort(() => Math.random() - 0.5)
  }

  dealCards = () => {
    
    if (!this.props.gameActive){

      for (let i = 0; i < cards; i++) { 
        setTimeout(() => {
        //  this.props.pickCard()
        this.props.nextTurn()
        document.getElementById("Deck_0").click()
          // console.log("deal counter", i)        
        }, i * dealDelay);  
      }

      setTimeout(() => {
        this.props.pileCard()
        while(["R","S","22","44","WC"].includes(this.props.value)){
          this.props.pileCard()
        }  
        this.props.toggleGame()
      }, (cards+1) * dealDelay)

      this.props.hideButtons()
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
      alert(`UNO CALL PENALTY. ${this.props[`player${this.props.turn}`]} DRAW 4 CARDS`)
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
    this.props.toggleGame()
    let cardPoints = this.props.allHands.map(card => card.points)
    let totalPoints = cardPoints.reduce((acc, pts) => acc + pts)
    let playerName = this.props[`player${player}`]
    let playerId = this.props[`userId${player}`]
    console.log("winner",player,playerName,playerId, totalPoints)
    this.props.saveGame({id: playerId, game:this.props.gameId, name: playerName, points: totalPoints})
    alert(`${playerName} WINS ${totalPoints} POINTS`)
    this.props.toLeaderboard()
  }
  
  CPUMove = (turn) => {
    return <CPU player = {turn} wildCard = {this.wildCard} plus4 = {this.plus4} unoCall = {this.props.unoCall} delay = {CPUDelay}/>
  
  }

  render () {
    
    if (this.props.demoMode){
      HumanPlayers = [] //1P: [1] Demo: []
      CpuPlayers = [1,2,3,4] // 1P: [2,3,4] Demo: [1,2,3,4]
  
      // display cards
      faceUpP1 = true
      faceUpP2 = true
      faceUpP3 = true
      faceUpP4 = true
      faceUpDeck = true
    }

    let newDeck = this.shuffleDeck(this.props.cards)
    let colorButtons  = <div></div>

    if (this.props.deck.length === 0){
      this.props.createDeck(newDeck) 
    }

    //render buttons to choose color
    if(HumanPlayers.includes(this.props.turn)){

      if (this.props.value === "WC" && this.props.color === "black") {
        // console.log('WC buttons')
        colorButtons =  <div>
        <br/>
        <button id = "WC_red" onClick= {() => this.wildCard("red")}>Switch Red WC</button>
        <br/>
        <button id = "WC_yellow" onClick= {() => this.wildCard("yellow")}>Switch Yellow WC</button>
        <br/>
        <button id = "WC_blue" onClick= {() => this.wildCard("blue")}>Switch Blue WC</button>
        <br/>
        <button id = "WC_green" onClick= {() => this.wildCard("green")}>Switch Green WC</button>
        </div>  
      } else if (this.props.value === "44" && this.props.color === "black") {
        // console.log('+4 buttons')
        colorButtons= <div>
        <br/>
        <button id = "44_red" onClick= {() => this.plus4("red")}>Switch Red +4</button>
        <br/>
        <button id = "44_yellow" onClick= {() => this.plus4("yellow")}>Switch Yellow +4</button>
        <br/>
        <button id = "44_blue" onClick= {() => this.plus4("blue")}>Switch Blue +4</button>
        <br/>
        <button id = "44_green" onClick= {() => this.plus4("green")}>Switch Green +4</button>
        </div>  
      }
    }    

    let CPUPlayer 
    if (CpuPlayers.includes(this.props.turn) && this.props.gameActive){
      // console.log("CPU ENGAGED", this.props.turn)
      CPUPlayer = <div>{this.CPUMove(this.props.turn)}</div>
    }

    return (
      <div className = "table">
        <div className = "colorIndicator" > Current Color <img className = {this.props.color} alt = {this.props.color}/> </div>
        <div className = "directionIndicator" > Direction: <br/> {this.props.order? "CLOCKWISE":"COUNTER CLOCKWISE"}</div>
        <div className = "turnIndicator" > Current Turn: <br/>{this.props.gameActive? this.props[`player${this.props.turn}`]: null}</div>
        <div>
          <br/>
          <button onClick = {this.dealCards}>START GAME</button>
        </div>
          <br/>
          <button onClick = {this.props.unoCall}>UNO CALL!</button>
        <div>
          <br/>
          <button onClick = {this.showRules}>RULES</button>
        </div>
        {/* <button onClick = {this.pass}>PASS</button> */}
        {colorButtons}
        {this.gameAction()}
        
        <div className = "tableItems"> 
          <Deck className = "deck" faceUp = {faceUpDeck}/>
          <Pile className = "pile" />
          <div className = "hands">
            <Hand player = {1} faceUp = {faceUpP1} declareWinner = {this.declareWinner}/>
            <Hand player = {2} faceUp = {faceUpP2} declareWinner = {this.declareWinner}/>
            <Hand player = {3} faceUp = {faceUpP3} declareWinner = {this.declareWinner}/>
            <Hand player = {4} faceUp = {faceUpP4} declareWinner = {this.declareWinner}/>
            {CPUPlayer}
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
  // console.log("CPU Active?", state.gameActive)

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
    demoMode: state.demoMode
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
 