import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadLeaderboardCreator} from '../actions';


class Leaderboard extends Component{

  componentDidMount(){
    this.props.loadLeaderboard()
  }

  loadTable = (games) => {
   return games.map( game => {
      console.log(game)
      
      return <div id = {game.id}>
                  Game:{game.game_id}
                  User:{game.user_id}
                  Result:{game.win? "Win":"Loss"}
                  Points:{game.points}
            </div>
    })
  }

  render () {

    return(
      <div>Leaderboard
        <button onClick = {() =>this.props.history.push('/auth')}> Log Out</button>
        <button onClick = {() =>this.props.history.push('/game')}> Start Game</button>
        {this.loadTable(this.props.allGames)}
      </div>
      
    )
  }
}
const mapStateToProps = (state) => {
  console.log("state: ", state.allGames)

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
