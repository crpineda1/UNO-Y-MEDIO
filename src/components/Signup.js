import React, {Fragment} from 'react';

const Signup = (props) => {

  return(
    <Fragment>
      <div className="form-group">
          <label className="col-form-label">Username</label>
          <input type="text" className="form-control" name="username"
                 onChange={props.handleForm} value={props.username}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" 
                 onChange={props.handleForm} value={props.password}/>
        </div>

        <div className="form-group">
            <label>Confirm password</label>
            <input type="password" className="form-control" name="passwordConf" 
                   onChange={props.handleForm} value={props.confirmPassword}/>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={props.signUp}>Sign Up</button>
          <button type="button" className="btn btn-primary" onClick={props.toggleForm}>Back to login</button>
        </div>
    </Fragment>
  )
}

export default Signup
