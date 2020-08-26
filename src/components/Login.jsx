import React, { useState } from 'react';

const Login = (props) => {

  // const [ username, setUsername ] = useState('');
  // const [ password, setPassword ] = useState('');

  // let redirectToHome = false;

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log('e.id', e.target.id)
  //   if (e.target.id === 'login-username' || e.target.id === 'signup-username') {
  //     setUsername(e.target.value, ...username)
  //     console.log('username', username);
  //   } else {
  //     setPassword(e.target.value, ...password)
  //     console.log('password', password);

  //   }
  // }

  // const login = () => {
  //   const credentials = {
  //     username: username,
  //     password: password
  //   }
  //   console.log('creditials------', credentials)
  //   fetch('/login', {
  //     method: 'post',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials),
  //   })
  //   .then(data => {
  //     console.log('data',)
  //     redirectToHome = true;
  //     console.log('redirectToHome', redirectToHome)
  //   })
  // }


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
              <input type="text" name="username" id="login-username" onChange={props.handleChange}/>
            </div>
            <div>
            <label>Password:</label>
              <input type="text" name="password" id="login-password" onChange={props.handleChange} />
            </div>
            <div>
              <button onClick={props.verifyAuth} type="submit" value="login"/>
            </div>
          </div>

          {/* <form action="/signup" method="post"> */}
            <div>
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
          {/* </form> */}
        </div>
        </div>
        <div>
        </div>
    </div>

  )
}

export default Login