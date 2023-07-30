import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { Swl } from "../../components/Swl";
import "./Register.css";
import API from "../../constants/api";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () =>{
      if(password === confirmPassword){
        return true
      }else{
        Swl.fire({
          icon: 'error',
          title: 'Password and Confirm Password should be same.',
          showConfirmButton: false,
          timer: 1500        
        })
        return false
      }
  }

  const submitForm = async() =>{
    let data = { username, email, password};
    try {
      setLoading(true);
      const response = await API.post('/users/register',data);
      if(response?.data?.success){
          Swl.fire({
            icon: 'success',
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 2000        
          })
          navigate('/login');
      }
    } catch (error) {
        Swl.fire({
          icon: 'error',
          title: error?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500        
        })
    }finally{
        setLoading(false);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validate()){
       submitForm()
    }
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h2>Connect Social</h2>
          <p>Connect with friends and world around you on Connect Social</p>
        </div>
        <div className="login-right">
          <form action="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username"
                required
                value={username}
                onChange={e => setUsername(e?.target?.value)} 
            />
            <input 
                type="email" 
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e?.target?.value)} 
            />
            <input 
                type="password" 
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e?.target?.value)} 
            />
            <input 
                type="password" 
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e?.target?.value)} 
            />
            <button className="login-button" type="submit">
                {loading ? <CircularProgress size={15} sx={{color: "#fff"}}/> : 'Sign Up'}
            </button>
            <Link to={'/login'}>
              <button className="register-button" type="button">Log in Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
