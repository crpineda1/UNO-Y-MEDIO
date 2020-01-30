import React, {Component} from 'react'
import { connect } from 'react-redux';

import Card from './Card'

class Hand extends Component {
 
  renderHand() {
    return this.props.hand.map((eachCard) => {
      return ( 
       <div>
         <Card card = {eachCard}/>
       </div> 
      )
    })
  }

  render () {
    return (
    <div> Hand 
      {this.renderHand()}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return { hand: state.hand }
}

export default connect(mapStateToProps)(Hand)