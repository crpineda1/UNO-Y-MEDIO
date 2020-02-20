import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUserGamesCreator, loadUsersCreator} from '../actions';


class Leaderboard extends Component{
  
  componentDidMount(){

    this.props.loadUserGames()
    this.props.loadUsers()
  }

  loadTable = (games,users) => {
    let UserNames = users.reduce( (acc, user) =>({...acc, [user.id]:user.name}), {} )
    
    let cutoff = 15

    let sorted = games.sort((a, b) => (a.points > b.points) ? -1 : 1)
    let top = sorted.slice(0,cutoff)
    let list = top.filter(game => game.win)

    return list.map( (game,i) => {
      // console.log(game)
      
      return <tr key = {game.id}>
                <td>
                {i+1}
                </td>
                <td>
                {UserNames[game.user_id]}
                </td>
                <td>
                  {game.points}
                </td>
                <td>
                {game.id}
                </td>
            </tr>
    })
  }



  render () {
    

    
    return(
      <div  className = "leaderboardBackground" > 
          <br/>
          <br/>
          <br/>
          <button onClick = {() =>this.props.history.push('/')}> Log Out</button>
          <br/>
          <div className = "title">
          Leaderboard
          </div>
          <br/>
          <br/>

        {/* <button onClick = {() =>this.props.history.push('/game')}> Start Game</button> {remove for game play} */}
      
        <table id="leaderboard" class="general">
          <tr>
            <th>Ranking</th>
            <th>Winner</th>
            <th>Points</th>
            <th>Game #</th>
          </tr>
            {this.loadTable(this.props.allUserGames,this.props.allUsers)}
        </table>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  console.log("userGames: ", state.allUserGames)
  console.log("users: ", state.allUsers)

  return { 
    allUserGames: state.allUserGames,
    allUsers: state.allUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadUserGames: () => dispatch(loadUserGamesCreator()),
     loadUsers: () =>  dispatch(loadUsersCreator())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Leaderboard)
