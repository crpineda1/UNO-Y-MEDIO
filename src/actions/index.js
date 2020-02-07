
const CREATE_DECK = "CREATE_DECK";   
const PLAY_CARD  = "PLAY_CARD";
const PICK_CARD = "PICK_CARD";
const NEXT_TURN = "NEXT_TURN"; 
const CHANGE_COLOR = "CHANGE_COLOR"; 
const ACTION_OFF = "ACTION_OFF"; 
const PILE_CARD = "PILE_CARD"; 
const UNO_CALL = "UNO_CALL"; 
const LOGIN_USER = "LOGIN_USER"; 
const TOGGLE_GAME = "TOGGLE_GAME"; 
const LOAD_LEADERBOARD = "LOAD_LEADERBOARD"; 
const CLEAR_GAME = "CLEAR_GAME"; 


const createDeckCreator = (cards) => ({type: CREATE_DECK, payload: cards})
const playCardCreator = (card) => ({type: PLAY_CARD, payload: card})
const pickCardCreator = () => ({type: PICK_CARD})
const nextTurnCreator = () => ({type:NEXT_TURN})
const changeColorCreator = (color) => ({type:CHANGE_COLOR, payload: color})
const actionOffCreator = () => ({type:ACTION_OFF})
const pileCardCreator = () => ({type:PILE_CARD})
const unoCallCreator = () => ({type:UNO_CALL})
const loginUserCreator = (info) => ({type:LOGIN_USER, payload: info})
const toggleGameCreator = (info) => ({type:TOGGLE_GAME, payload: info})
const clearGameCreator = () => ({type:CLEAR_GAME})

const loadLeaderboardCreator = () => {
  
  return(dispatch) => {
    fetch("http://localhost:3000/usergames")
    .then(resp => resp.json())
    .then(data => { dispatch({type:LOAD_LEADERBOARD, payload: data })})
  }
}
  
const saveGameCreator = (player) => {
  
  // return(dispatch) => {
  //   console.log("save game", player.id, player.name, player.points)
  //   dispatch({type:CLEAR_GAME})
  // }
  
  return(dispatch) => {
    fetch("http://localhost:3000/usergames",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user_id": player.id,
        "game_id": 3,
        "win": true,
        "points": player.points
      })
    })
    .then(resp => resp.json())
    .then(data => {dispatch({type:CLEAR_GAME})})
  }
  
}
  


export {
  createDeckCreator,
  playCardCreator,
  pickCardCreator,
  nextTurnCreator,
  changeColorCreator,
  actionOffCreator,
  pileCardCreator,
  unoCallCreator,
  loginUserCreator,
  toggleGameCreator,
  loadLeaderboardCreator,
  saveGameCreator,
  clearGameCreator,
    
}


