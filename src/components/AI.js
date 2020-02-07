import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, pickCardCreator} from '../actions';



class AI extends Component {
 
  AiTurn() {

    let playerHand
    let playCard = null
    let colors =["red","blue","yellow","green"]
    let delay = 2000 // milliseconds

  
    playerHand = this.props[`hand${this.props.player}`]
    
   
    // console.log("AI player", this.props.player)
    // console.log("AI turn", this.props.turn)
    // console.log("game active:", this.props.gameActive)
    // console.log("color:", this.props.currentColor)
    // console.log("value:", this.props.currentValue)


    // *** AI logic ***

    setTimeout(() => {
      
      
      // DECIDE WHICH CARD TO PLAY OR PICK FROM DECK
    
      if (playerHand.find( card => card.color === this.props.currentColor)){
        playCard =  playerHand.find( card => card.color === this.props.currentColor)
      } else {
        if (playerHand.find( card => card.value === this.props.currentValue)) {
          playCard =  playerHand.find( card => card.value === this.props.currentValue)
        } else {
          if (playerHand.find( card => card.color === 'black')) {
            playCard =  playerHand.find( card => card.color === 'black')
          } else {
            playCard =  "pick from pile"
          }
        }
      }

      
      // EXECUTE DECISION


      if (playCard){
        if (playCard === "pick from pile"){
          this.props.pickCard()
          console.log("player",this.props.player,"draw card")
        } else {
          
          // check for uno call
          if (playerHand.length === 2){
            alert(`${this.props[`name${this.props.player}`]} calls UNO Y MEDIO`)
            this.props.unoCall()
          } 
          
          this.props.playCard(playCard)  // disable for testing
          console.log("AI",this.props.player,"play card:",playCard.color,playCard.value)
          
          // CHOOSE RANDOM COLOR AFTER BLACK CARD WAS PLAYED
          if (playCard.color === "black"){
            let randColor = colors[Math.floor(Math.random() * colors.length)]
            playCard.value === "WC"? this.props.wildCard(randColor):this.props.plus4(randColor)
          }
          
          playCard = null
        }
      }


    }, delay)
          
    // end of renderHand
  }


   
    
    
  
  render () {
    // blank to render nothing
    return (
      <div> 
        {this.AiTurn()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("hand1", state.hand1)
  // console.log("hand2", state.hand2)
  // console.log("hand3", state.hand3)
  // console.log("hand4", state.hand4)
  // console.log("turn", state.turn)
  // console.log("gameActive", state.gameActive)
  
  return { 
    hand1: state.hand1,
    hand2: state.hand2,
    hand3: state.hand3,
    hand4: state.hand4,
    name1: state.player1,
    name2: state.player2,
    name3: state.player3,
    name4: state.player4,
    // turn: state.turn,
    // gameActive: state.gameActive,
    currentColor: state.currentColor,
    currentValue: state.currentValue
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    pickCard: () => dispatch(pickCardCreator())

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AI)