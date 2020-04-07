import React, {Component} from 'react'
import {connect} from 'react-redux';
import {playCardCreator, pickCardCreator, changeColorCreator} from '../actions';



class AI extends Component {
 
  AiTurn() {

    let playerHand
    let playCard = null
    let colors =["red","blue","yellow","green"]
    let delay = this.props.delay // milliseconds *** reset to 1500 ***

  
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


      if (playCard && this.props.gameActive){
        if (playCard === "pick from pile"){
          document.getElementById("Deck_0").click() // simulated click event (for animation)
          // this.props.pickCard()
          console.log("player",this.props.player,"draw card")
        } else {
          
          // check for uno call
          if (playerHand.length === 2){
            alert(`${this.props[`name${this.props.player}`]} calls UNO Y MEDIO`)
            this.props.unoCall()
          } 
          console.dir(playCard)
          
          
          console.log("AI",this.props.player,"play card:",playCard.color,playCard.value,playCard.reff)
          
          // check for black card *** no animation if play black card due to multiple steps

          if (playCard.color === "black"){
            // play black card w/o animation (need further debugging)
            this.props.playCard(playCard)  // disable for testing
            
            // CHOOSE RANDOM COLOR AFTER BLACK CARD WAS PLAYED
            let randColor = colors[Math.floor(Math.random() * colors.length)]
            
            if(playCard.value === "WC"){
              this.props.wildCard(randColor)
              // document.getElementById(`WC_${randColor}`).click()
              
            } else {
              this.props.plus4(randColor)
              // document.getElementById(`44_${randColor}`).click()
              
            }
          } else {
            // play non black cards with animation
            document.getElementById(`${this.props.player}_${playCard.code}`).click()
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
    gameActive: state.gameActive,
    currentColor: state.currentColor,
    currentValue: state.currentValue
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    playCard: (card) => dispatch(playCardCreator(card)),
    pickCard: () => dispatch(pickCardCreator()),
    changeColor: (color) => dispatch(changeColorCreator(color)),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AI)