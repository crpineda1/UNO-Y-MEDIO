import React, {Component} from 'react'
import card_back from '../images/back_logo.png'
import {CSSTransition} from 'react-transition-group'

const timeout = 2000

class Card extends Component {


  state = {
    inProp: false
  }

  cardStyle = {
    'height': '100px',
    'zIndex': `${parseInt(this.props.index)}`,
    'left': `${(30*parseInt(this.props.index))}px`,
    'position': 'absolute',
  }

  cardStylee = {
    'height': '100px'
  }

  handleClick = (card) =>{
    this.setState({
      inProp: true // enter
    })
    setTimeout(() => {
      this.props.handleClick(card)
      this.setState({
        inProp: false // exit
      })
    }, timeout);
  }

  render () {
    // console.log(this.props.card)
    return (
      <CSSTransition in={this.state.inProp} timeout={timeout} classNames="deckHand2">
        <div style = {this.props.index? this.cardStyle:this.cardStylee} onClick = {() => this.handleClick(this.props.card)}>
          <img  className = "cardImg"  src={this.props.visible? this.props.card.img:card_back} alt='card_image'/>
        </div>
      </CSSTransition>
    )
  }
}


export default Card
      