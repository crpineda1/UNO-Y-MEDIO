import React, {Component} from 'react';
import {connect} from 'react-redux';


import Table from './Table'
import Navbar from './Navbar';
import {clearGameCreator} from '../actions';


class Game extends Component {
  
  state = {
    showButtons: true
  }

  hideButtons = () => {
    this.setState({
      showButtons: false
    })
  }

  toLeaderboard = () => {
    this.props.history.push("/leaderboard")
  }

  reloadPage = () => {
    window.location.reload();
  }
  
  //sends to leaderboard
  endGame = () => {
    this.props.clearGame()
    setTimeout(() => {
      this.toLeaderboard()
    }, 100);
  }

  exit = () => {
    this.props.clearGame()
    setTimeout(() => {
      this.props.history.push("/")
    }, 100);
  }


  render () {
    return (
      <div className = "game">  
        <Navbar 
          showButtons = {this.state.showButtons}
          exit = {() => this.exit()} 
          endGame = {() => this.endGame()} 
          reloadPage = {this.reloadPage}
        />
        <Table 
          hideButtons = {this.hideButtons}
          toLeaderboard = {this.toLeaderboard}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state: ", state)
  return { 
    gameActive: state.gameActive,

  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch",dispatch)
  return{
    clearGame: () => dispatch(clearGameCreator())

  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Game)