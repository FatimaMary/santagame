import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "../App.css";


export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <div className="logo"></div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <li>My Wishlist</li>
        <li>Secret Santa</li>
        <li onClick={handleClick}>
          Login
        </li>
        <li>Help</li>
        <li onClick={() => navigate("/retrieve")}>SignIn</li>
      </ul>
    </nav>
  );
};

export default NavBar;
