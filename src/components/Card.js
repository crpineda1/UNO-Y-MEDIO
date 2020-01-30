import React, {Component} from 'react'



class Card extends Component {
  
  render () {
    return (
         <div 
          key = {this.props.card.code}
          Color = {this.props.card.color}
          Value = {this.props.card.value}
          Points = {this.props.card.points} >
          <img  src={this.props.card.img} alt='card_image'/>
        </div>
      
    )
  }
}


export default Card
      