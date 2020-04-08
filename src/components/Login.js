import React from 'react';

const Login = (props) => {

  return(
    <div className = "authItemBlock">
      <div className = "authItems">
        <label> NAME:</label>
        <input 
          type="text" 
          name="username"
          onChange={props.handleForm} 
          value={props.username}
        />
        <button 
          type="button"  
          onClick={props.logIn}
        > ENTER (1P mode)
        </button>
        <br/>
        <button 
          type="button"  
          onClick={props.demoMode}
        >DEMO(only CPU)
        </button>
        <br/>
        <button 
          type="button"  
          onClick={props.toLeaderboard}
        > LEADERBOARD
        </button>
      </div>
    </div>
  )
}

export default Login
 