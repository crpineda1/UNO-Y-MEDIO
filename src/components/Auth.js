import React, {Component} from 'react';
import Login from './Login';

import {connect} from 'react-redux';
import {loginUserCreator, newGameCreator, demoActiveCreator} from '../actions';

import logo from '../images/_UNO_Y_MEDIO_logo.png'
import cow from '../images/_cow.png'


class Auth extends Component {

  state = {
    userId: 0,
    username: '',
    password: 'none'


  }

  componentDidUpdate(prevState) {
    console.log("username:",this.state.username)
    console.log("pw:",this.state.password)
    // console.log("pw:",this.state.passwordConf)
  }


  handleForm = (e) => {
    console.log("handle form")
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  demoMode = () => {
    this.props.demoActive()
    this.props.history.push("/game")
  }

  login = ()  => {
    this.props.login({ username: this.state.username, password: this.state.password})
    // this.props.newGame()
    this.props.history.push("/game")
  }
  
  toLeaderboard = () => {
    this.props.history.push("/leaderboard")
  }


  render (){

    return(
      <div className = "auth" >

        <br />
        <br />
        <br />
        <br />
        <br />
        <img className = "authLogoImg" src= {logo} alt = {"logo"} />
        <br />
        <div className = "loginandCow">

        {<Login  
          username = {this.state.username} 
          password = {this.state.password} 
          handleForm = {this.handleForm} 
          demoMode = {this.demoMode} 
          logIn = {this.login} 
          toLeaderboard = {this.toLeaderboard} 
        />}
        <br />
        <img className = "cowImg" src= {cow} alt = {"logo"}/>
        </div>

      </div >
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
}

const mapDispatchToProps = (dispatch) =>{
  return{
    login: (info) => dispatch(loginUserCreator(info)),
    newGame: () => dispatch(newGameCreator()),
    demoActive: () => dispatch(demoActiveCreator())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Auth)