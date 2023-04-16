import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h2>Connect Social</h2>
          <p>Connect with friends and world around you on Connect Social</p>
        </div>
        <div className="login-right">
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Log In</button>
            <p className="forgot-password">Forgot password?</p>
            <button className="register-button">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
