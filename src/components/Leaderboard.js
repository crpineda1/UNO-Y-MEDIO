import React, {Component} from 'react';

class Leaderboard extends Component{

  render () {

    return(
      <div>Leaderboard
        <button onClick = {() =>this.props.history.push('/auth')}> Log Out</button>
      </div>
      
    )
  }
}
export default Leaderboard