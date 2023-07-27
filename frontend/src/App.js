import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext);

  const isLoggedIn = () =>{
    const loginData = localStorage.getItem("loginData");
    console.log("loginData",loginData)
    if(loginData) 
      return true
    else 
      return false
  }

  console.log("isLoggedIn",isLoggedIn())

  console.log("router called",user)
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/profile/:name" element={<Profile />}/>
        <Route  path="/login" element={<Login /> }/>
        <Route  path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
