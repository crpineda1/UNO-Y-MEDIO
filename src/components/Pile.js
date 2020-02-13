import React, {Component} from 'react'
import {connect} from 'react-redux';
import Card from './Card'
import {setRefPileCreator} from '../actions';



class Pile extends Component {
 
  
  render () {
    
    let faceUp = true

    return (
      <div className = "pile"> Pile 
      <Card 
        parent = "Pile"
        card = {this.props.pile[0]} 
        visible = {faceUp} 
        handleClick = {() =>{}}
        ref = {this.props.setRefPile(this)}
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { 
    pile: state.pile 
  }
}
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    setRefPile: (ref) => dispatch(setRefPileCreator(ref))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pile)