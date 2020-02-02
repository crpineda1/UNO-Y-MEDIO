
const CREATE_DECK = "CREATE_DECK";   
const DEAL_CARDS = "DEAL_CARDS"; 
const PLAY_CARD  = "PLAY_CARD";
const PICK_CARD = "PICK_CARD";
const NEXT_TURN = "NEXT_TURN"; 
const CHANGE_COLOR = "CHANGE_COLOR"; 
const ACTION_OFF = "ACTION_OFF"; 
const PILE_CARD = "PILE_CARD"; 

const createDeckCreator = (cards) => ({type: CREATE_DECK, payload: cards})
const dealCardsCreator = () => ({type: DEAL_CARDS})
const playCardCreator = (card) => ({type: PLAY_CARD, payload: card})
const pickCardCreator = () => ({type: PICK_CARD})
const nextTurnCreator = () => ({type:NEXT_TURN})
const changeColorCreator = (color) => ({type:CHANGE_COLOR, payload: color})
const actionOffCreator = () => ({type:ACTION_OFF})
const pileCardCreator = () => ({type:PILE_CARD})


// const handleChangeCreator = (text) =>({type: HANDLE_CHANGE, payload: { text }})


export {
  createDeckCreator,
  dealCardsCreator,
  playCardCreator,
  pickCardCreator,
  nextTurnCreator,
  changeColorCreator,
  actionOffCreator,
  pileCardCreator,
    
}


