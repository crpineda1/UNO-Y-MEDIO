import React, {Fragment} from 'react';

const Login = (props) => {

  return(
    <Fragment>
      <br />
      <div >
        <label> Username</label>
        <input type="text" name="username"
               onChange={props.handleForm} value={props.username}/>
      </div>
      <div >
        <label>Password</label>
        <input type="password" name="password" 
               onChange={props.handleForm} value={props.password}/>
      </div>
      <br />
      <div >
        <button type="button"  onClick={props.logIn}>Log In</button>
        <button type="button"  onClick={props.toggleForm}>Create account</button>
      </div>
    </Fragment>
  )
}

export default Login
