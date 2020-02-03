import React, {Component, Fragment} from 'react'



class Navbar extends Component {

  render () {

    return(
      <Fragment>
        <div className = "navbar"> Navbar items: 
          <div> Mini Uno logo </div>
          <button onClick = {this.props.logout}> LOGOUT</button>
          <button onClick = {this.props.leaderboard}> END GAME</button>
        </div>

      </Fragment>
    )
  }
}
export default Navbar