import React, {Component,Fragment} from 'react';
import Login from './Login';
import Signup from './Signup';

import {connect} from 'react-redux';
import {loginUserCreator, newGameCreator} from '../actions';

import logo from '../images/_UNO_Y_MEDIO_logo.png'
import cow from '../images/_cow.png'


class Auth extends Component {

  state = {
    userId: 1,
    username: '',
    password: '',
    passwordConf: '',
    login: true

  }

  componentDidUpdate(prevState) {
    console.log("username:",this.state.username)
    console.log("pw:",this.state.password)
    console.log("pw:",this.state.passwordConf)
    console.log("login",this.state.login)
  }


  handleForm = (e) => {
    console.log("handle form")
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleForm = () => {
    this.setState({
      login: !this.state.login
    })
  
  }

  login = ()  => {
    this.props.login({ username: this.state.username})
    this.props.newGame()
    this.props.history.push("/game")
  }
    

  render (){
    let form

    if (this.state.login){
      form =  <Login  username = {this.state.username} password = {this.state.password} handleForm = {this.handleForm} toggleForm = {this.toggleForm} logIn = {this.login} />
    } else {
      form =  <Signup username = {this.state.username} password = {this.state.password} handleForm = {this.handleForm} toggleForm = {this.toggleForm}/>
    }

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

        {form}
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
    newGame: (info) => dispatch(newGameCreator(info)),

  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Auth)