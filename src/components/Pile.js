import React, {Component} from 'react'
import { connect } from 'react-redux';
import Card from './Card'



class Pile extends Component {
 
  
  render () {

    let faceUp = true

    return (
      <div className = "pile"> Pile 
      <Card 
        parent = "Pile"
        card = {this.props.pile[0]} 
        visible = {faceUp} 
        handleClick = {() =>{}}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { 
    pile: state.pile 
  }
}

export default connect(mapStateToProps)(Pile)