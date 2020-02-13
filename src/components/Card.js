import React, {Component} from 'react'
import {connect} from 'react-redux';
import card_back from '../images/back_logo.png'
import {Transition} from 'react-transition-group'
import ReactDOM from 'react-dom';

const timeout = 2000

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
    // set ref for current card
    if(this.props.setRef){
      // console.log("card this", this)
      this.props.setRef(ReactDOM.findDOMNode(this))
    }
    
    
    if(this.props.index || this.props.index === 0){
      // console.log("enter via CDM",this.props.parent,this.props.index)
      // this.enterCard()
      

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

      
      // console.log("deckDOM",deckDOM)
      // console.log("pileDOM",pileDOM)
      // console.log("cardDOM",cardDOM)
      // console.log("deckPos",this.deckPos)
      // console.log("cardPos",this.cardPos)
      // console.log("pilePos",this.pilePos)
      console.log("travelFromDeck",this.travelFromDeck)
      // console.log("travelToPile",this.travelToPile)
      
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.inProp !== this.state.inProp){
      console.log(this.props.parent,this.props.index,prevState.inProp,this.state.inProp)
    }
    
      
  }

  
  enterCard = () =>{
    // console.log("enterCard", this.props.parent,this.props.index)
    this.setState({
      inProp: true // enter
    })
  } 
  
  exitCard = () =>{
    console.log("exitCard",this.props.parent,this.props.index,this.travelToPile)

    this.setState({
      inProp: false // exit
    })
  } 

  handleClick = (card) =>{
    if(this.props.parent !== "Pile"){
      // console.log("enter via Click",this.props.parent,this.props.index)
      // this.enterCard()
      console.log("exit via Click",this.props.parent,this.props.index)
      this.exitCard()
    }
    setTimeout(() => {
      this.props.handleClick(card)
    }, timeout);  
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
    entering: { 

      // position: "absolute",
      // left: this.deckPos.x,
      // top: this.deckPos.y,
     
      // transform: `translate(${-1*this.travelFromDeck.x}px, ${-1*this.travelFromDeck.y}px) rotate(00deg)`,
      // transition: `transform ${timeout}ms`,
      // "transitionTimingFunction": "linear",

      
    },
    entered:  { 
      opacity: 1
      // transform: `translate(${this.travelFromDeck.x}, ${this.travelFromDeck.y}) rotate(00deg)`,
      // transition: `transform ${timeout}ms`,
      // "transition-timing-function": "linear",
    },
    exiting:  { 

      // position: 'absolute',
      // transform: `translate(${-1*this.travelFromDeck.x}px, ${-1*this.travelFromDeck.y}px) rotate(00deg)`,
      // transform: `translate(${this.travelToPile.x}px, ${this.travelToPile.y}px)`,
      transform: `translate(100px, -100}px)`,
      transition: `transform 2000ms`,
      transitionTimingFunction: "linear",
    },
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
          onClick = {() => this.handleClick(this.props.card)}>
            <img
          style = {{...defaultStyle, ...this.transitionStyles[state]}} 
              id = {this.props.parent} 
              // className = "cardImg"  
              src={this.props.visible? this.props.card.img:card_back} alt='card_image'
            />
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