import React from 'react';


const Login = () => {

  return (
    <div>
      <div className="title">
        mCanon
      </div>
      <br/>
      <div className="tabs-new-entry">
      <div className="form">
      <div className="tabs-new-entry-links">
                <button type="button" id="login">
                  LOGIN
                </button>
                <button type="button" id="sign-up" >
                  SIGN UP
                </button>
              </div>
      <form action="/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username"/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password"/>
        </div>
        <div>
          <input type="submit" value="Log In"/>
        </div>

      </form>
    </div>
    </div>
    </div>
  )
}

export default Login