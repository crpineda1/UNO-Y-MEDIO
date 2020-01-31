import React, {Component} from 'react'
import { connect } from 'react-redux';
import Card from './Card'



class Pile extends Component {
 
  
  render () {
    // console.log("pile:", this.props.pile[0])
    let faceUp = true

    return (
      <div className = "pile"> Pile 
      <Card card = {this.props.pile[0]} visible = {faceUp} handleClick = {() =>{}}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state)
  return { 
    pile: state.pile 
  }
}

export default connect(mapStateToProps)(Pile)