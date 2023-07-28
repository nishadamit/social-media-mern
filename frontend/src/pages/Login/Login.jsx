import React, { useState, useContext } from "react";
import { CircularProgress } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";
import {Swl} from "../../components/Swl";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(AuthContext);

  const navigateToHome = () =>{
    navigate('/', {replace: true});
  }

  const handleOnSubmit = (e) =>{
      e.preventDefault();
      login({email, password}, dispatch, navigateToHome);
  }



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
                required
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={e => setPassword(e?.target?.value)}
                required
            />
            <button className="login-button" type="submit">
              {isFetching ? <CircularProgress size={15} sx={{color: "#fff"}}/> : 'Log In'}
            </button>
            <Link to={'/register'}>
              Forgot password?
            </Link>
            <Link to={'/register'}>
              <button className="register-button" type="button">Create a New Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
