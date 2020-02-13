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
  deckPos = {}
  cardPos = {}
  pilePos = {}
  travelFromDeck = {}
  travelToPile = {}

  componentDidMount(){
    if(this.props.setRef){
      // console.log("card this", this)
      this.props.setRef(ReactDOM.findDOMNode(this))
    }
    
    console.log("enter via CDM",this.props.parent,this.props.index)
    this.enterCard()
    if(this.props.index || this.props.index === 0){
      const deckDOM = document.getElementById('Deck').getBoundingClientRect();
      // console.log(document.getElementById('Deck') )
      const pileDOM = document.getElementById('Pile').getBoundingClientRect();
      // console.log(document.getElementById('Pile') )
      const cardDOM = ReactDOM.findDOMNode(this).getBoundingClientRect();
      
     this.deckPos = {
       x: deckDOM.x,
       y: deckDOM.y
     }
     
     this.cardPos = {
       x: cardDOM.x,
       y: cardDOM.y
     }
    
     this.pilePos = {
       x: pileDOM.x,
       y: pileDOM.y
     }

     this.travelFromDeck = {
       x: this.cardPos.x - this.deckPos.x,
       y: this.cardPos.y - this.deckPos.y,
     }

     this.travelToPile = {
       x: this.pilePos.x - this.cardPos.x,
       y: this.pilePos.y - this.cardPos.y,
     }

      
      console.log("deckDOM",deckDOM)
      console.log("pileDOM",pileDOM)
      console.log("cardDOM",cardDOM)
      console.log("deckPos",this.deckPos)
      console.log("cardPos",this.cardPos)
      console.log("pilePos",this.pilePos)
      console.log("travelFromDeck",this.travelFromDeck)
      console.log("travelToPile",this.travelToPile)
      
    }
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
    // 'height': '100px',
    'zIndex': `${parseInt(this.props.index)}`,
    'left': `${(30*parseInt(this.props.index))}px`,
    'position': 'absolute',
  }

  defaultStyleNonHand = {
    // 'height': '100px'
  }

  transitionStyles = {
    entering: { 
      position: "absolute",
      left: this.deckPos.x,
      top: this.deckPos.y,
     
      transform: translateX(this.cardPos.x) translateY(this.cardPos.y) rotate(90deg),
      transition: transform 2000ms,
      transition-timing-function: linear,

    },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 1},
  }

  render () {
    

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
            <img id = {this.props.parent} className = "cardImg"  src={this.props.visible? this.props.card.img:card_back} alt='card_image'/>
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