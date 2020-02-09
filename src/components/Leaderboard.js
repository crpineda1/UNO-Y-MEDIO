import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadLeaderboardCreator} from '../actions';


class Leaderboard extends Component{

  componentDidMount(){
    this.props.loadLeaderboard()
  }

  loadTable = (games) => {
   let list = games.filter(game => game.win)
    return list.map( game => {
      // console.log(game)
      
      return <div key = {game.id}>
                  Game:{game.game_id}
                  Winner:{game.user_id}
                  {/* Result:{game.win? "Win":"Loss"} */} 
                  Points:{game.points}
            </div>
    })
  }

  render () {

    return(
      <div className = "table" >  Leaderboard
        <button onClick = {() =>this.props.history.push('/')}> Log Out</button>
        {/* <button onClick = {() =>this.props.history.push('/game')}> Start Game</button> {remove for game play} */}
        {this.loadTable(this.props.allGames)}
      </div>
      
    )
  }
}
const mapStateToProps = (state) => {
  // console.log("state: ", state.allGames)

  return { 
    allGames: state.allGames,


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadLeaderboard: () => dispatch(loadLeaderboardCreator()),


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Leaderboard)
