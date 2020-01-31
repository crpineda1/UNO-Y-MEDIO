import React, {Component} from 'react'
import card_back from '../images/back_logo.png'



class Card extends Component {


  
  render () {
    console.log(this.props.card)
    return (
        <div 
          id = {this.props.card}
          key = {this.props.card.code}
          Color = {this.props.card.color}
          Value = {this.props.card.value}
          Points = {this.props.card.points} 
          onClick = {() => this.props.handleClick(this.props.card)}
          >
          <img className = "cardImg" src={this.props.visible? this.props.card.img:card_back} alt='card_image'/>
        </div>
      
    )
  }
}


export default Card
      