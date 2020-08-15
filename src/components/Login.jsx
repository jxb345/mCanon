import React from 'react';


const Login = () => {

  return (
    <div>
      <div className="title">
        mCanon
      </div>
      <br/>
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
  )
}

export default Login