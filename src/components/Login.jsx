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
          <div>
            <div>
              <label>Username:</label>
              <input type="text" name="username" id="login-username" onChange={handleChange}/>
            </div>
            <div>
            <label>Password:</label>
              <input type="text" name="password" id="lgoin-password" onChange={handleChange} />
            </div>
            <div>
              <button onClick={login} type="submit" value="LogIn"/>
            </div>
          </div>

          <form action="/signup" method="post">
            <div>
              <label>Username:</label>
              <input type="text" name="username" id="signup-username" onChange={handleChange}/>
            </div>
            <div>
            <label>Password:</label>
              <input type="text" name="password" id="signup-password" onChange={handleChange}/>
            </div>
            <div>
              <input type="submit" value="SignUp"/>
            </div>
          </form>
        </div>
        </div>
        <div>
        </div>
    </div>

  )
}

export default Login