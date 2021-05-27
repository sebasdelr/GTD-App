import React, { useState } from "react";

import "./LoginForm.css";


const LoginForm = () => {
  const [isValid, setValid] = useState(false);
  
  const modalCloseHandler = (event) => {
    event.preventDefault();
    setValid(true);
  }

  const showForm = (    
  <div>
    <div className="backdrop"></div>
    <div className="login-form">

      <form onSubmit={modalCloseHandler}>
        <label>Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit">Login</button>
      </form>
    </div>

    
  </div>
  );


  return (
    <div>
      {!isValid ? showForm : ''}
    </div>

    
  );
};

export default LoginForm;
