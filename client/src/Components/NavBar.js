import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
// import { Link } from "react-router-dom";
import { x } from "react-icons-kit/feather/x";
import "../App.css";

export const NavBar = () => {
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
      <ul className="links">
        <li>My Wishlist</li>
        <li>Secret Santa</li>
        <li>
          Login
          {/* <Link to="/Login">Login</Link> */}
        </li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default NavBar;
