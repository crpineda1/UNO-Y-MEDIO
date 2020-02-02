import React, {Component} from 'react'
import {connect} from 'react-redux';
import {pickCardCreator} from '../actions';

import Card from './Card'



class Deck extends Component {
 
  
  render () {
    
    let faceUp = false

    return (
      <div className = "deck"> Deck 
      <Card card = {this.props.deck[0]} visible = {faceUp} handleClick = {this.props.pickCard}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { 
    deck: state.deck
  }  
}

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    pickCard: () => dispatch(pickCardCreator())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck)