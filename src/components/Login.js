import React, {Fragment} from 'react';

const Login = (props) => {

  return(
    <div className = "authItemBlock">
      <div className = "authItems">
        <label> NAME:</label>
        <input type="text" name="username"
               onChange={props.handleForm} value={props.username}/>
        <button type="button"  onClick={props.logIn}>ENTER</button>
        {/* <button type="button"  onClick={props.toggleForm}>Create account</button> */}
      </div>
    </div>
  )
}

export default Login
