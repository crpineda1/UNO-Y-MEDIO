import React, {Component, Fragment} from 'react'

import logo from '../images/_UNO_Y_MEDIO_logo.png'


class Navbar extends Component {
  
  render () {
    
    let buttons
      
    if(this.props.showButtons){
      buttons = 
        <>
          <div >
            <button onClick = {this.props.exit}> EXIT</button>
          </div>
          <br/>
          <div >
            <button onClick = {this.props.endGame}> LEADERBOARD</button>
          </div>
        </>
    }

    return(
      <Fragment>
        <div className = "navbar"> 
          <img className = "miniLogo" src= {logo} alt = {"logo"} />
          <br/>
          <br/>
          {buttons}
          <br/>
          <div >
            <button onClick = {this.props.reloadPage}> END GAME</button>
          </div>
        </div>

      </Fragment>
    )
  }
}
export default Navbar