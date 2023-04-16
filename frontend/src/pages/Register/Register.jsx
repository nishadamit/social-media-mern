import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h2>Connect Social</h2>
          <p>Connect with friends and world around you on Connect Social</p>
        </div>
        <div className="login-right">
          <form action="">
            <input type="text" placeholder="Username" />

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="login-button">Sign Up</button>
            <button className="register-button">Log in Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
