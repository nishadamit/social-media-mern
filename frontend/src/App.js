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
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
            <Route  path="/" element={<Home />} />
            <Route  path="/profile/:name" element={<Profile />}/>
        </Route>
        <Route  path="/login" element={<Login /> }/>
        <Route  path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
