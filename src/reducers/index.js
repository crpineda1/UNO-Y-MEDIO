

import card_back from '../images/back_logo.png'

import black_4 from '../images/black_4.png'
import black_WC from '../images/black_WC.png'

import red_1 from '../images/red_1.png'
import red_2 from '../images/red_2.png'
import red_3 from '../images/red_3.png'
import red_4 from '../images/red_4.png'
import red_5 from '../images/red_5.png'
import red_6 from '../images/red_6.png'
import red_7 from '../images/red_7.png'
import red_8 from '../images/red_8.png'
import red_9 from '../images/red_9.png'
import red_0 from '../images/red_0.png'
import red_R from '../images/red_R.png'
import red_S from '../images/red_S.png'
import red_22 from '../images/red_22.png'

import yellow_1 from '../images/yellow_1.png'
import yellow_2 from '../images/yellow_2.png'
import yellow_3 from '../images/yellow_3.png'
import yellow_4 from '../images/yellow_4.png'
import yellow_5 from '../images/yellow_5.png'
import yellow_6 from '../images/yellow_6.png'
import yellow_7 from '../images/yellow_7.png'
import yellow_8 from '../images/yellow_8.png'
import yellow_9 from '../images/yellow_9.png'
import yellow_0 from '../images/yellow_0.png'
import yellow_R from '../images/yellow_R.png'
import yellow_S from '../images/yellow_S.png'
import yellow_22 from '../images/yellow_22.png'

import blue_1 from '../images/blue_1.png'
import blue_2 from '../images/blue_2.png'
import blue_3 from '../images/blue_3.png'
import blue_4 from '../images/blue_4.png'
import blue_5 from '../images/blue_5.png'
import blue_6 from '../images/blue_6.png'
import blue_7 from '../images/blue_7.png'
import blue_8 from '../images/blue_8.png'
import blue_9 from '../images/blue_9.png'
import blue_0 from '../images/blue_0.png'
import blue_R from '../images/blue_R.png'
import blue_S from '../images/blue_S.png'
import blue_22 from '../images/blue_22.png'

import green_1 from '../images/green_1.png'
import green_2 from '../images/green_2.png'
import green_3 from '../images/green_3.png'
import green_4 from '../images/green_4.png'
import green_5 from '../images/green_5.png'
import green_6 from '../images/green_6.png'
import green_7 from '../images/green_7.png'
import green_8 from '../images/green_8.png'
import green_9 from '../images/green_9.png'
import green_0 from '../images/green_0.png'
import green_R from '../images/green_R.png'
import green_S from '../images/green_S.png'
import green_22 from '../images/green_22.png'



let defaultState = {
  cards: [
    { color: 'black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'red', value: '0', code:'R0', points:0, img:red_0 },
    { color: 'red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'yellow', value: '0', code:'Y0', points:0, img:yellow_0 },
    { color: 'yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'blue', value: '0', code:'B0', points:0, img:blue_0 },
    { color: 'blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'green', value: '0', code:'G0', points:0, img:green_0 },
    { color: 'green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'green', value: '22', code:'G22', points:20, img:green_22 },
    { color: 'green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'green', value: '22', code:'G22', points:20, img:green_22 }
  ],
  deck: [],
  pile:  [{color: 'black', value: '0', code:'B0', points:0, img:card_back }],
  
  hand1: [],
  hand2: [],
  hand3: [],
  hand4: [],


  turn: 1,
  orderClockwise: true, 
  currentColor: '',
  currentValue: '',
  actionCard: false,
  unoCall: false,
  unoPenalty: false,
  regCard: false,
  gameActive: false,

  gameId: 1, // rest to 0 
  userId1: 19, // reset to 0  
  userId2: 16, 
  userId3: 17, 
  userId4: 18, 
  player1: 'Kenny',
  player2:'Cartman',
  player3:'Stan',
  player4:'Kyle',
  allGames: [],

}

let reducer = (prevState=defaultState, action) => {
  let newHand
  let newDeck
  let newPile
  let card
  let nextTurn
  let newOrder
  let activateCard = false
  let activateUnoPenalty = false
  let deactivateUnoCall = false
  let newRegCard = false

  switch(action.type){
    case 'CREATE_DECK': 
      // console.log("create deck")
      return {...prevState, deck: action.payload }

    case 'PLAY_CARD': 
      // console .log("play card")

      // console.log("pilecard color",card.color)
      // console.log("pilecard value",card.value)
      // console.log("playcard color",action.payload.color)
      // console.log("playcard value",action.payload.value)
      // console.log("store color",prevState.currentColor)
      // console.log("store value",prevState.currentValue)
      // console.log("turn",prevState.turn)
      // console.log("next card",prevState.deck[0])

      
      newHand = [...prevState[`hand${prevState.turn}`]]

      // remove the played card from the current player's hand
      newHand.splice(prevState[`hand${prevState.turn}`].indexOf(action.payload),1)

      // add the played card to the top of the pile 
      newPile = [action.payload,...prevState.pile]
      

      // choose who plays next based on orderClockwise or counterclockwise 
      // if (prevState.orderClockwise){
      //   prevState.turn === 4? nextTurn = 1: nextTurn = prevState.turn+1
      // } else {
      //   prevState.turn === 1? nextTurn = 4: nextTurn = prevState.turn-1
      // }
      
      
      // check for SKIP
      if (action.payload.value === 'S'){
        activateCard = true
        nextTurn = prevState.turn
       
        // refactored and moved functionality to next turn
        // if (prevState.orderClockwise){
        //   if (prevState.turn === 4){  
        //     nextTurn = 2
        //   } else if(prevState.turn === 3){
        //     nextTurn = 1
        //   }else{ 
        //   nextTurn += 1
        //   } 
        // } else{
        //   if (prevState.turn === 2){  
        //     nextTurn = 4
        //   } else if(prevState.turn === 1){
        //     nextTurn = 3
        //   }else{ 
        //   nextTurn -= 1
        //   } 
        // }
      }
      


      // check for REVERSE
      if (action.payload.value === 'R'){ 
        console.log("new direction")
        newOrder = !prevState.orderClockwise
      } else { 
        newOrder = prevState.orderClockwise 
      }

      // check for BLACK CARD (+4, WC) and do not change turn to allow player to choose new color
      // if (action.payload.color === "black"){
      //   nextTurn = prevState.turn
      // }
      
      // check for +2 card and auto draw 2 cards for the next player and skip turn
      if (action.payload.value === "22"){
        activateCard = true
      } 
      
      
      
      // check if card matches color, value, or if black(+4 or wild card)
      if (prevState.currentColor === action.payload.color || prevState.currentValue === action.payload.value || 'black' === action.payload.color) {
        
        
        // check one card left in the hand and no uno call ,if so activate uno penalty (draw 2 if UNO not called)
        if (newHand.length === 1 && !prevState.unoCall){
          console.log("uno call penalty")
          activateUnoPenalty = true
          nextTurn = prevState.turn
        }
        
        if (["0","1","2","3","4","5","6","7","8","9","R"].includes(action.payload.value)) {
          newRegCard = true
        }
        
        // console.log("AI ACTIVE", false)
        return {...prevState, pile: newPile, 
          [`hand${prevState.turn}`]: newHand, 
          currentColor: action.payload.color, 
          currentValue: action.payload.value, 
          // turn: nextTurn,
          orderClockwise: newOrder, 
          actionCard: activateCard, 
          unoCall: deactivateUnoCall, 
          unoPenalty: activateUnoPenalty,
          regCard: newRegCard,
          gameActive: false,

        } 

      } else {
        return {...prevState}
      }

      
      
    case 'NEXT_TURN':
      // console.log("next turn")
      
      // console.log("prev turn", prevState.turn)
      // console.log("prev value", prevState.currentValue)
      // console.log("prev action", prevState.actionCard)
      // console.log("prev clockwise?", prevState.orderClockwise)
      // console.log("nextTurn", prevState.turn)
      
      
      nextTurn = prevState.turn

      if (prevState.currentValue === 'S' && prevState.actionCard){
        if (prevState.orderClockwise){
          if (prevState.turn === 4){  
            nextTurn = 2
          } else if(prevState.turn === 3){
            nextTurn = 1
          }else{ 
          nextTurn += 2
          } 
        } else {
          if (prevState.turn === 2){  
            nextTurn = 4
          } else if(prevState.turn === 1){
            nextTurn = 3
          }else{ 
            nextTurn -= 2
          } 
        }
      } else {
        if (prevState.orderClockwise){
          prevState.turn === 4? nextTurn = 1: nextTurn = prevState.turn+1
        } else {
          prevState.turn === 1? nextTurn = 4: nextTurn = prevState.turn-1
        }
      }
      // console.log("new turn", nextTurn)

      return{...prevState, turn: nextTurn, unoPenalty: false}
      


    case 'PICK_CARD':
      // console.log("pick card", prevState.turn)
      newDeck = [...prevState.deck]
      card = newDeck.shift() 
      newHand = [...prevState[`hand${prevState.turn}`],card]
      return {...prevState, deck: newDeck, [`hand${prevState.turn}`]: newHand }
    

    case 'PILE_CARD':
      // console.log("pick card")
      newDeck = [...prevState.deck]
      card = newDeck.shift() 
      newPile = [card,...prevState.pile]
      return {...prevState, deck: newDeck, pile: newPile, currentColor: card.color, currentValue: card.value}
    
    
    case 'CHANGE_COLOR':
      console.log("change color",action.payload)
    
      return {...prevState, currentColor: action.payload }
 
      
    case 'ACTION_OFF':
      // console.log("ACTION OFF")
    
      return {...prevState, actionCard: false, regCard: false, unoPenalty: false }


    case 'UNO_CALL':
      console.log("UNO CALL")
    
      return {...prevState, unoCall: true }


    case 'LOGIN_USER':
      // console.log("LOGIN USER")
    
      return {...prevState, userId: action.payload.userId, player1: action.payload.username }
    
    case 'TOGGLE_GAME':
      // console.log("AI ACTIVE", !prevState.gameActive)
    
      return {...prevState, gameActive: !prevState.gameActive }
        
    case 'LOAD_LEADERBOARD':
      console.log("LOAD LEADERBOARD")
      // console.log("API response", action.payload.status)
      // console.log("all users", action.payload.data)
    
      return {...prevState, allGames: action.payload.data }
    
    case 'CLEAR_GAME':
      console.log("CLEAR_GAME")
    
      return {...prevState,
        deck: [],
        pile:  [{color: 'black', value: '0', code:'B0', points:0, img:card_back }],
        
        hand1: [],
        hand2: [],
        hand3: [],
        hand4: [],
        
        turn: 1,
        orderClockwise: true, 
        currentColor: '',
        currentValue: '',
        actionCard: false,
        unoCall: false,
        unoPenalty: false,
        regCard: false,
        gameActive: false,

      }  

    default: 
      return {...prevState}
  }
}



export default reducer