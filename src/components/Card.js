import React, {Component} from 'react'
import card_back from '../images/back_logo.png'



class Card extends Component {

  cardStyle = {
    'height': '100px',
    'z-index': `${parseInt(this.props.index)}`,
    'left': `${(30*parseInt(this.props.index))}px`,
    'position': 'absolute',
  }

  cardStylee = {
    'height': '100px'
  }

  render () {
    // console.log(this.props.card)
    return (
      <div style = {this.props.index? this.cardStyle:this.cardStylee} onClick = {() => this.props.handleClick(this.props.card)}>
        <img  className = "cardImg"  src={this.props.visible? this.props.card.img:card_back} alt='card_image'/>
      </div>
    )
  }
}


export default Card
      