import React, {Component} from 'react'
import {connect} from 'react-redux';
import card_back from '../images/back_logo.png'
import {Transition} from 'react-transition-group'
import ReactDOM from 'react-dom';

const timeout = 100

class Card extends Component {


  state = {
    inProp: true
  }

  deckPos = {}
  cardPos = {}
  pilePos = {}
  travelFromDeck = {}
  travelToPile = {}

  handPos = {}

  componentDidMount(){

    
    if(this.props.parent === "Deck"){
      const handDOM = document.getElementById(`${this.props.turn}`).getBoundingClientRect();
      console.log("current hand", document.getElementById(`${this.props.turn}`))
      const deckDOM = document.getElementById('Deck').getBoundingClientRect();
      console.log(document.getElementById('Deck') )
      
      
      this.deckPos = {
        x: deckDOM.x,
        y: deckDOM.y
      }
      this.handPos = {
        x: handDOM.right,
        y: handDOM.top
      }

      
      // console.log("deckPos",this.deckPos)
      // console.log("handPos",this.handPos)

      this.travelFromDeck = {
        x: this.handPos.x - this.deckPos.x + (this.props.hand1.length+1)*30,
        y: this.handPos.y - this.deckPos.y,
      }

      console.log("travelFromDeck",this.travelFromDeck)
      
    }    
    
    if(this.props.index || this.props.index === 0){
      // console.log("enter via CDM",this.props.parent,this.props.index)
      // this.enterCard()
      

      let deckDOM = document.getElementById('Deck').getBoundingClientRect();
      // console.log(document.getElementById('Deck') )
      let pileDOM = document.getElementById('Pile').getBoundingClientRect();
      // console.log(document.getElementById('Pile') )
      let cardDOM = ReactDOM.findDOMNode(this).getBoundingClientRect();
      
    //  this.deckPos = {
    //    x: deckDOM.x,
    //    y: deckDOM.y
    //  }
    this.cardPos = {
      x: cardDOM.left,
      y: cardDOM.top
    }
    this.pilePos = {
      x: pileDOM.left,
      y: pileDOM.top
    }

    switch (this.props.turn) {
      case 1:
        this.travelToPile = {
          x: this.pilePos.x - this.cardPos.x,
          y: this.pilePos.y - this.cardPos.y,
        }
        break;
    
      case 2:
        this.travelToPile = {
          x: this.pilePos.y - this.cardPos.y,
          y: -this.pilePos.x + this.cardPos.x,
        }
        break;
    
      case 3:
        this.travelToPile = {
          x: -this.pilePos.x + this.cardPos.x,
          y: -this.pilePos.y + this.cardPos.y,
        }
        break;
    
      case 4:
        this.travelToPile = {
          x: -this.pilePos.y + this.cardPos.y,
          y: this.pilePos.x - this.cardPos.x,
        }
        break;
    
      default:
        break;
    }


    //  this.travelFromDeck = {
    //    x: this.cardPos.x - this.deckPos.x,
    //    y: this.cardPos.y - this.deckPos.y,
    //  }

    //  this.travelToPile = {
    //    x: this.pilePos.x - this.cardPos.x,
    //    y: this.pilePos.y - this.cardPos.y,
    //  }

      
      // console.log("deckDOM",deckDOM)
      // console.log("pileDOM",pileDOM)
      // console.log("cardDOM",cardDOM)
      // console.log("deckPos",this.deckPos)
      // console.log("cardPos",this.cardPos)
      // console.log("pilePos",this.pilePos)
      // console.log("travelFromDeck",this.travelFromDeck)
      // console.log("travelToPile",this.travelToPile)
      
    }
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.inProp !== this.state.inProp){
      // console.log(this.props.parent,this.props.index,prevState.inProp,this.state.inProp)
    }
    
    if(this.props.parent === "Deck" && prevProps.turn !== this.props.turn){
      const handDOM = document.getElementById(`${this.props.turn}`).getBoundingClientRect()
      // console.log("hand",document.getElementById(`${this.props.turn}`).getBoundingClientRect())
      // console.log("hand",document.getElementById(`${this.props.turn}`))

      const deckDOM = document.getElementById('Deck').getBoundingClientRect()
      // console.log("deck",document.getElementById('Deck').getBoundingClientRect())
      // console.log(document.getElementById('Deck') )
       
      
      this.deckPos = {
        x: deckDOM.top,
        y: deckDOM.left
      }

      switch (this.props.turn) {
        case 1:
          this.deckPos = {
            x: deckDOM.left,
            y: deckDOM.top
          }
          this.handPos = {
            x: handDOM.left + 30*(parseInt(this.props.hand1.length)+1),
            y: handDOM.top
          }
          break;
      
        case 2:
          this.deckPos = {
            x: deckDOM.right,
            y: deckDOM.top
          }
          this.handPos = {
            x: handDOM.right,
            y: handDOM.top + 30*(parseInt(this.props.hand2.length)+1)
          }
          break;
      
        case 3:
          this.deckPos = {
            x: deckDOM.right,
            y: deckDOM.bottom
          }
          this.handPos = {
            x: handDOM.right - 30*(parseInt(this.props.hand3.length)+1),
            y: handDOM.bottom
          }
          break;
      
        case 4:
          this.deckPos = {
            x: deckDOM.left,
            y: deckDOM.bottom + 30*(parseInt(this.props.hand3.length)+1),
          }
          this.handPos = {
            x: handDOM.left,
            y: handDOM.bottom
          }
          break;
      
        default:
          break;
      }
      // console.log("deckPos",this.deckPos)
      // console.log("handPos",this.handPos)
      // console.log("hand1 length", (this.props.hand1.length))

      this.travelFromDeck = {
        x: this.handPos.x - this.deckPos.x,
        y: this.handPos.y - this.deckPos.y 
      }

      // console.log("travelFromDeck",this.travelFromDeck)



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
      // console.log("exit via Click",this.props.parent,this.props.index)
      this.exitCard()
    }
    setTimeout(() => {
      if(this.props.parent === "Deck"){this.enterCard()} // to reset effect for next card in deck
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
  
  render () {
   let rotation = 0

    if (this.props.parent === "Deck"){
      rotation = (this.props.turn-1)*90
    } else {
      rotation = (this.props.turn-1)*-90
    }

    
    // console.log("travelToPile",this.travelToPile)


    let transitionStyles = {}

    if (this.props.parent === "Deck"){
      transitionStyles = {
        entering: { 
          opacity: 1,
          // position: "absolute",
          // left: this.deckPos.x,
          // top: this.deckPos.y,
        
          // transform: `translate(${-1*this.travelFromDeck.x}px, ${-1*this.travelFromDeck.y}px) rotate(${0}deg)`,
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

          opacity: 1,
          transform: ` translate(${this.travelFromDeck.x}px, ${this.travelFromDeck.y}px) rotate(${rotation}deg)`,
          // transform: `translate(${218}px, ${-351}px)`,
          transition: `transform ${timeout}ms`,
          transitionTimingFunction: "linear",
        },
        exited:  { opacity: 1},
      }
 
    } else {
      transitionStyles = {  
        entering: { 
          opacity: 1,
          // position: "absolute",
          // left: this.deckPos.x,
          // top: this.deckPos.y,
        
          // transform: `translate(${-1*this.travelFromDeck.x}px, ${-1*this.travelFromDeck.y}px) rotate(${0}deg)`,
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
        opacity: 1,
          transform: `translate(${this.travelToPile.x}px, ${this.travelToPile.y}px) rotate(${rotation}deg) `,
          transition: `transform ${timeout}ms`,
          transitionTimingFunction: "linear",
        },
        exited:  { opacity: 1},
      }
    }

    

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
            id = {this.props.reff}
            style = {{...defaultStyle, ...transitionStyles[state]}} 
            onClick = {() => this.handleClick(this.props.card)}>
            <img
              id = {this.props.parent} 
              className = "cardImg"  
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
    turn: state.turn,
    hand1: state.hand1,
    hand2: state.hand2,
    hand3: state.hand3,
    hand4: state.hand4,
  }
}


export default connect(mapStateToProps)(Card)