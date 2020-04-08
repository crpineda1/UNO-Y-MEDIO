
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
const LOAD_USERGAMES = "LOAD_USERGAMES"; 
const LOAD_USERS = "LOAD_USERS"; 
const CLEAR_GAME = "CLEAR_GAME"; 
const NEW_GAME = "NEW_GAME"; 
const DEMO_ACTIVE = "DEMO_ACTIVE"; 


const createDeckCreator = (cards) => ({type: CREATE_DECK, payload: cards})
const playCardCreator = (card) => ({type: PLAY_CARD, payload: card})
const pickCardCreator = () => ({type: PICK_CARD})
const nextTurnCreator = () => ({type:NEXT_TURN})
const changeColorCreator = (color) => ({type:CHANGE_COLOR, payload: color})
const actionOffCreator = () => ({type:ACTION_OFF})
const pileCardCreator = () => ({type:PILE_CARD})
const unoCallCreator = () => ({type:UNO_CALL})
const toggleGameCreator = (info) => ({type:TOGGLE_GAME, payload: info})
const clearGameCreator = () => ({type:CLEAR_GAME})
const demoActiveCreator = () => ({type:DEMO_ACTIVE})




const loadUserGamesCreator = () => {
  
  return(dispatch) => {
    fetch("https://uno-y-medio-backend.herokuapp.com/usergames")
    .then(resp => resp.json())
    .then(data => { dispatch({type:LOAD_USERGAMES, payload: data })})
  }
}
const loadUsersCreator = () => {
  
  return(dispatch) => {
    fetch("https://uno-y-medio-backend.herokuapp.com/users")
    .then(resp => resp.json())
    .then(data => { dispatch({type:LOAD_USERS, payload: data })})
  }
}

const saveGameCreator = (player) => {
  
  // return(dispatch) => {
    console.log("save game", player.id, player.game, player.name, player.points)
    //   dispatch({type:CLEAR_GAME})
    // }
  
  return(dispatch) => {
    fetch("https://uno-y-medio-backend.herokuapp.com/usergames",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: player.id,
        game_id: player.game,
        win: true,
        points: player.points
      })
    })
    .then(resp => resp.json())
    .then(data => {dispatch({type:CLEAR_GAME})})
    // .then(data => console.log(data))
  }
  
}
  
const loginUserCreator = (info) => { 

  
  return(dispatch) => {
    fetch("https://uno-y-medio-backend.herokuapp.com/users",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: info.username,
        password: info.password
      })
    })
    .then(resp => resp.json())
    .then(data => {dispatch({type:LOGIN_USER, payload: data})})
    // .then(data => console.log(data))
  }
  
}

const newGameCreator = () => { 

  
  return(dispatch) => {
    fetch("https://uno-y-medio-backend.herokuapp.com/games",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: "",
      })
    })
    .then(resp => resp.json())
    .then(data => {dispatch({type:NEW_GAME, payload: data})})
    // .then(data => console.log(data))
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
  loadUsersCreator,
  loadUserGamesCreator,
  saveGameCreator,
  clearGameCreator,
  newGameCreator,
  demoActiveCreator


}
 

