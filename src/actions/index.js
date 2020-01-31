
const CREATE_DECK = "CREATE_DECK";   
const DEAL_CARDS = "DEAL_CARDS"; 
const PLAY_CARD  = "PLAY_CARD";
const PICK_CARD = "PICK_CARD";
const NEXT_TURN = "NEXT_TURN"; 

const createDeckCreator = (cards) => ({type: CREATE_DECK, payload: cards})
const dealCardsCreator = () => ({type: DEAL_CARDS})
const playCardCreator = (card) => ({type: PLAY_CARD, payload: card})
const pickCardCreator = () => ({type: PICK_CARD})
const nextTurnCreator = () => ({type:NEXT_TURN})


// const handleChangeCreator = (text) =>({type: HANDLE_CHANGE, payload: { text }})


export {
  createDeckCreator,
  dealCardsCreator,
  playCardCreator,
  pickCardCreator,
  nextTurnCreator,
    
}


