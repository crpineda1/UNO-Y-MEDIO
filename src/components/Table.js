import React, {Component} from 'react';
import Hand from './Hand';
import Deck from './Deck';
import Pile from './Pile';


class Table extends Component {

  render () {
    return (
      <div> Table 
        <Deck />
        <Pile />
        <Hand />
      </div>
    )
  }
}

export default Table