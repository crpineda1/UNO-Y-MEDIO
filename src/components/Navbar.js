import React, {Component, Fragment} from 'react'

import logo from '../images/_UNO_Y_MEDIO_logo.png'


class Navbar extends Component {

  render () {

    return(
      <Fragment>
        <div className = "navbar"> 
          <img className = "miniLogo" src= {logo} alt = {"logo"} />
          <div >
            <br/>
            <br/>
            <button onClick = {this.props.exit}> EXIT</button>
          </div>
          <br/>
          <div >
            <button onClick = {this.props.stopGame}> END GAME</button>
          </div>
          <br/>
          <div >
            <button onClick = {this.props.endGame}> LEADERBOARD</button>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Navbar