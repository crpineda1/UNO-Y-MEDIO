import React, {Component} from 'react'
import { connect } from 'react-redux';
import Card from './Card'



class Deck extends Component {
 
  
  render () {
    console.log("deck:", this.props.deck)

    return (
      <div> Deck 
      <Card card = {this.props.deck[0]}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return { deck: state.deck }
}

export default connect(mapStateToProps)(Deck)