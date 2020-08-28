import React, { useState, useEffect } from 'react';

const Login = (props) => {

  // copied directly from Form.jsx - probably move this to
  // App.jsx and have Login.jsx and Form.jsx
  // use this function as a prop
  const handleTabs = (action) => {
    // added these 4 const(s) inside handleTabs
    // b/c when they were in the functional scope
    // they 4 consts were undefined
    const signinCredentials = document.getElementsByClassName("signup-credentials")[0];
    const loginCredentials = document.getElementsByClassName("login-credentials")[0];
    const loginButtonClick = document.getElementById("login");
    const signinButtonClick = document.getElementById("signup");

    console.log('login', loginCredentials)
    // const loginElement = loginCredentials[0]
    // const signinElement = signinCredentials[0]
    console.log('signin', signinCredentials)

    if (action === 'login') {
      loginButtonClick.style.opacity = '100%'
      loginCredentials.style.display = 'block';
      signinButtonClick.style.opacity = '40%'
      signinCredentials.style.display = 'none';
    } else {
      loginCredentials.style.display = 'none';
      loginButtonClick.style.opacity = '40%';
      signinCredentials.style.display = 'block';
      signinButtonClick.style.opacity = '100%'
    }
  }

  return (
        <div>
          <div className="title">
            mCanon
          </div>
          <br/>
          <div className="tabs-new-entry">
          <div className="form">
          <div className="tabs-new-entry-links">
            <button type="button" id="login" onClick={ () => { handleTabs('login') }}>
              LOGIN
            </button>
            <button type="button" id="signup" onClick={ () => { handleTabs('signup') }}>
              SIGN UP
            </button>
          </div>
          <div className="login-credentials">
              <label>Username:</label>
              <input type="text" name="username" id="login-username" onChange={props.handleChange}/>
            <div>
            <label>Password:</label>
              <input type="text" name="password" id="login-password" onChange={props.handleChange} />
            </div>
            <div>
              <button onClick={props.verifyAuth} type="submit" value="login"/>
            </div>
          </div>
            <div className="signup-credentials">
              <label>Username:</label>
              <input type="text" name="username" id="signup-username" onChange={props.handleChange}/>
            </div>
            <div>
            <label>Password:</label>
              <input type="text" name="password" id="signup-password" onChange={props.handleChange}/>
            </div>
            <div>
              <button onClick={props.verifyAuth} value="signup"/>
            </div>
        </div>
        </div>
    </div>

  )
}

export default Login