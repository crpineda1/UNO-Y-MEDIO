import React, {Component, Fragment} from 'react'

import logo from '../images/_UNO_Y_MEDIO_logo.png'


class Navbar extends Component {

  render () {

    return(
      <Fragment>
        <div className = "navbar"> Navbar items: 
        <img className = "miniLogo" src= {logo} alt = {"logo"} />
          <button onClick = {this.props.exit}> EXIT</button>
          <button onClick = {this.props.endGame}> END GAME</button>
        </div>

      </Fragment>
    )
  }
}
export default Navbar