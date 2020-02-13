import React, {Component} from 'react'
import {connect} from 'react-redux';
import card_back from '../images/back_logo.png'
import {Transition} from 'react-transition-group'
import ReactDOM from 'react-dom';

const timeout = 1000

class Card extends Component {


  state = {
    inProp: true
  }

  componentDidMount(){
   console.log("enter via CDM",this.props.parent,this.props.index)
    this.enterCard()
  }
  
  enterCard = () =>{
    // console.log("enterCard", this.props.parent,this.props.index)
    this.setState({
      inProp: true // enter
    })
  } 
  
  exitCard = () =>{
    // console.log("exitCard",this.props.parent,this.props.index)
    this.setState({
      inProp: false // exit
    })
  } 

  handleClick = (card) =>{
    if(this.props.parent !== "Deck"){
      console.log("enter via Click",this.props.parent,this.props.index)
      this.enterCard()
      console.log("exit via Click",this.props.parent,this.props.index)
      this.exitCard()
    }
      this.props.handleClick(card)
  }

  defaultStyleHand = {
    'height': '100px',
    'zIndex': `${parseInt(this.props.index)}`,
    'left': `${(30*parseInt(this.props.index))}px`,
    'position': 'absolute',
  }

  defaultStyleNonHand = {
    'height': '100px'
  }

  transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 1},
  }

  render () {
    if(this.props.ref){this.props.ref(this)}

    console.log("deckRef",this.props.refDeck)
    console.log("pileRef",this.props.refPile)

    const deckDOM = ReactDOM.findDOMNode(this.props.refDeck);
    const pileDOM = ReactDOM.findDOMNode(this.props.refPile);
    console.log("deckDOM",deckDOM)
    console.log("pileDOM",pileDOM)

    let defaultStyle = {}

    if(this.props.index){
      defaultStyle = this.defaultStyleHand
    } else {
      defaultStyle = this.defaultStyleNonHand
    }
    
    


    // console.log(this.props.card)
    return (
      <Transition in={this.state.inProp} timeout={timeout} /*classNames="deckHand1"*/>
        {state => (
          <div 
            style = {{...defaultStyle, ...this.transitionStyles[state]}} 
            onClick = {() => this.handleClick(this.props.card)}>
            <img  className = "cardImg"  src={this.props.visible? this.props.card.img:card_back} alt='card_image'/>
          </div>
        )}
      </Transition>
    )
  }
}

const mapStateToProps = (state) => {

  return { 
    refDeck: state.refDeck,
    refPile: state.refPile 
  }
}


export default connect(mapStateToProps)(Card)