import { combineReducers } from 'redux';

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


const cardsReducer = () => { // static reducer 
  return [
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Red', value: '0', code:'R0', points:0, img:red_0 },
    { color: 'Red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'Red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'Red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'Red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'Red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'Red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'Red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'Red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'Red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'Red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'Red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'Red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'Red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'Red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'Red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'Red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'Red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'Red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'Red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'Red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'Red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'Red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'Red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'Red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'Yellow', value: '0', code:'Y0', points:0, img:yellow_0 },
    { color: 'Yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'Yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'Yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'Yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'Yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'Yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'Yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'Yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'Yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'Yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'Yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'Yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'Yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'Yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'Yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'Yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'Yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'Yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'Yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'Yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'Yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'Yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'Yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'Yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'Blue', value: '0', code:'B0', points:0, img:blue_0 },
    { color: 'Blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'Blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'Blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'Blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'Blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'Blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'Blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'Blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'Blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'Blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'Blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'Blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'Blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'Blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'Blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'Blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'Blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'Blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'Blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'Blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'Blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'Blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'Blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'Blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'Green', value: '0', code:'G0', points:0, img:green_0 },
    { color: 'Green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'Green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'Green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'Green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'Green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'Green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'Green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'Green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'Green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'Green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'Green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'Green', value: '22', code:'G22', points:20, img:green_22 },
    { color: 'Green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'Green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'Green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'Green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'Green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'Green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'Green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'Green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'Green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'Green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'Green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'Green', value: '22', code:'G22', points:20, img:green_22 }
  ]
}
const deckReducer = () => { // static reducer 
  return [
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: '44', code:'B44', points:50, img:black_4 },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Black', value: 'WC', code:'BWC', points:50, img:black_WC },
    { color: 'Red', value: '0', code:'R0', points:0, img:red_0 },
    { color: 'Red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'Red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'Red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'Red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'Red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'Red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'Red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'Red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'Red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'Red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'Red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'Red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'Red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'Red', value: '2', code:'R2', points:2, img:red_2 },
    { color: 'Red', value: '3', code:'R3', points:3, img:red_3 },
    { color: 'Red', value: '4', code:'R4', points:4, img:red_4 },
    { color: 'Red', value: '5', code:'R5', points:5, img:red_5 },
    { color: 'Red', value: '6', code:'R6', points:6, img:red_6 },
    { color: 'Red', value: '7', code:'R7', points:7, img:red_7 },
    { color: 'Red', value: '8', code:'R8', points:8, img:red_8 },
    { color: 'Red', value: '9', code:'R9', points:9, img:red_9 },
    { color: 'Red', value: 'R', code:'RR', points:20, img:red_R },
    { color: 'Red', value: 'S', code:'RS', points:20, img:red_S },
    { color: 'Red', value: '22', code:'R22', points:20, img:red_22 },
    { color: 'Yellow', value: '0', code:'Y0', points:0, img:yellow_0 },
    { color: 'Yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'Yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'Yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'Yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'Yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'Yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'Yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'Yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'Yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'Yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'Yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'Yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'Yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'Yellow', value: '2', code:'Y2', points:2, img:yellow_2 },
    { color: 'Yellow', value: '3', code:'Y3', points:3, img:yellow_3 },
    { color: 'Yellow', value: '4', code:'Y4', points:4, img:yellow_4 },
    { color: 'Yellow', value: '5', code:'Y5', points:5, img:yellow_5 },
    { color: 'Yellow', value: '6', code:'Y6', points:6, img:yellow_6 },
    { color: 'Yellow', value: '7', code:'Y7', points:7, img:yellow_7 },
    { color: 'Yellow', value: '8', code:'Y8', points:8, img:yellow_8 },
    { color: 'Yellow', value: '9', code:'Y9', points:9, img:yellow_9 },
    { color: 'Yellow', value: 'R', code:'YR', points:20, img:yellow_R },
    { color: 'Yellow', value: 'S', code:'YS', points:20, img:yellow_S },
    { color: 'Yellow', value: '22', code:'Y22', points:20, img:yellow_22 },
    { color: 'Blue', value: '0', code:'B0', points:0, img:blue_0 },
    { color: 'Blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'Blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'Blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'Blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'Blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'Blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'Blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'Blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'Blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'Blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'Blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'Blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'Blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'Blue', value: '2', code:'B2', points:2, img:blue_2 },
    { color: 'Blue', value: '3', code:'B3', points:3, img:blue_3 },
    { color: 'Blue', value: '4', code:'B4', points:4, img:blue_4 },
    { color: 'Blue', value: '5', code:'B5', points:5, img:blue_5 },
    { color: 'Blue', value: '6', code:'B6', points:6, img:blue_6 },
    { color: 'Blue', value: '7', code:'B7', points:7, img:blue_7 },
    { color: 'Blue', value: '8', code:'B8', points:8, img:blue_8 },
    { color: 'Blue', value: '9', code:'B9', points:9, img:blue_9 },
    { color: 'Blue', value: 'R', code:'BR', points:20, img:blue_R },
    { color: 'Blue', value: 'S', code:'BS', points:20, img:blue_S },
    { color: 'Blue', value: '22', code:'B22', points:20, img:blue_22 },
    { color: 'Green', value: '0', code:'G0', points:0, img:green_0 },
    { color: 'Green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'Green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'Green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'Green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'Green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'Green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'Green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'Green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'Green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'Green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'Green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'Green', value: '22', code:'G22', points:20, img:green_22 },
    { color: 'Green', value: '1', code:'G1', points:1, img:green_1 },
    { color: 'Green', value: '2', code:'G2', points:2, img:green_2 },
    { color: 'Green', value: '3', code:'G3', points:3, img:green_3 },
    { color: 'Green', value: '4', code:'G4', points:4, img:green_4 },
    { color: 'Green', value: '5', code:'G5', points:5, img:green_5 },
    { color: 'Green', value: '6', code:'G6', points:6, img:green_6 },
    { color: 'Green', value: '7', code:'G7', points:7, img:green_7 },
    { color: 'Green', value: '8', code:'G8', points:8, img:green_8 },
    { color: 'Green', value: '9', code:'G9', points:9, img:green_9 },
    { color: 'Green', value: 'R', code:'GR', points:20, img:green_R },
    { color: 'Green', value: 'S', code:'GS', points:20, img:green_S },
    { color: 'Green', value: '22', code:'G22', points:20, img:green_22 }
  ]
}

const handReducer = () => { // static reducer 
  return [
    { color: 'Red', value: '1', code:'R1', points:1, img:red_1 },
    { color: 'Yellow', value: '1', code:'Y1', points:1, img:yellow_1 },
    { color: 'Blue', value: '1', code:'B1', points:1, img:blue_1 },
    { color: 'Green', value: '1', code:'G1', points:1, img:green_1 }
  ]
}


const pileReducer = () => {
  return  [
   { color: 'Red', value: '2', code:'R2', points:2, img:red_2 }
  
  ]
    

}

// // to reder an selected card when clicked
// const topCardReducer = (topCard = null, action) => {
//   if (action.type === "TOP_CARD") {
//     return action.payload
//   }
//   return topCard
// }

export default combineReducers ({
  cards: cardsReducer,
  deck: deckReducer,
  hand: handReducer,
  pile: pileReducer,
  // topCard: topCardReducer,
})