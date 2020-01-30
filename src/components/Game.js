import React, {Component} from 'react';
import Table from './Table'
import { connect } from 'react-redux';
import { topCard } from '../actions'; // {} only for named expport, not default export

class Game extends Component {
  
  render () {
    // this.props === {deck: state.deck} 
    console.log("game props",this.props)
    console.log("game props",this.props.deck)
    return (
      <div> Game 

        <Table />
      </div>
    )
  }
}



export default Game