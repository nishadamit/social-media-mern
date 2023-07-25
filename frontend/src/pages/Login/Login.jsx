import React, { useState, useContext } from "react";
import { login } from "../services/login";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, error, isFetching, dispatch } = useContext(AuthContext);
  const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log("called")
        login({email, password}, dispatch)
        // console.log("email",email);
        // console.log("password", password);
  }

  console.log("user",user)
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h2>Connect Social</h2>
          <p>Connect with friends and world around you on Connect Social</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleOnSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                onChange={e => setEmail(e?.target?.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={e => setPassword(e?.target?.value)}
            />
            <button className="login-button" type="submit">Log In</button>
            <p className="forgot-password">Forgot password?</p>
            <button className="register-button">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
