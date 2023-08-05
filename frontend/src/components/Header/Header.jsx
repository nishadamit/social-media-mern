import React,{ useState } from "react";
import { 
  Menu,
  MenuItem, 
  ListItemIcon,
  CircularProgress
} from "@mui/material";
import { 
  Search, 
  Person, 
  Message, 
  Notifications,
  Logout, 
  AccountCircle
} from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";
import API from "../../constants/api";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loader, setLoader] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate()

  const logout = async() =>{
    setLoader(true);
    try {
      const response = await API.post("/users/logout");
      if(response?.data?.success){
        localStorage.clear();
        handleClose();
        setLoader(false);
        navigate('/login')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/" style={{textDecoration: 'none'}}>
        <span>Connect Social</span>
        </Link>
      </div>
      <div className="header-middle">
        <Search className="search-icon" />
        <input className="search-input" />
      </div>
      <div className="header-right">
        <div className="header-links">
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className="header-icons">
          <div className="icon-container">
            <Person className="icon" />
            <span>1</span>
          </div>
          <div className="icon-container">
            <Message className="icon" />
            <span>1</span>
          </div>
          <div className="icon-container">
            <Notifications className="icon" />
            <span>1</span>
          </div>
        </div>
        <div className="profile-image-container">
          <img
            src={`${PF}person/1.jpeg`}
            alt="profile pic"
            className="round-image-3"
            onClick={handleClick}
          />
        </div>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose} sx={{fontSize: "16px"}}>
              <ListItemIcon>
                <AccountCircle fontSize="large" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={logout} sx={{fontSize: "16px"}}>
              {
                loader ?
                <CircularProgress size={20}/> 
                :
                <>
                  <ListItemIcon>
                    <Logout fontSize="large" />
                  </ListItemIcon>
                  Logout
                </>
              }
            </MenuItem>
          </Menu>
        {/* <div>
          <button onClick={logout}>Logout</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
