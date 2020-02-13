import React, {Component} from 'react'
import {connect} from 'react-redux';
import Card from './Card'
import {setRefPileCreator} from '../actions';
import ReactDOM from 'react-dom';


class Pile extends Component {

  componentDidMount(){
    let ref = ReactDOM.findDOMNode(this)
    this.props.setRefPile(ref)
    console.log(this)
  }
  
  render () {
    
    console.log(this.ref)

    let faceUp = true

    return (
      <div className = "pile"> Pile 
      <Card 
        parent = "Pile"
        card = {this.props.pile[0]} 
        visible = {faceUp} 
        handleClick = {() =>{}}
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