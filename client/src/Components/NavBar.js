import React, { useState } from 'react';
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import '../App.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function NavBar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
      setToggle(!toggle);
    };
  
    return (
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="logo"></div>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
        </div>
        <ListItem className="links" >
          <ListItemText>My Wishlist</ListItemText>
          <ListItemText>Secret Santa</ListItemText>
          <ListItemText>
            Login
            {/* <Link to="/Login">Login</Link> */}
          </ListItemText>
          <ListItemText>Help</ListItemText>
        </ListItem>
      </nav>
    );
  
}

export default NavBar