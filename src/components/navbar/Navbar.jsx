import React from "react";
import "../../sass/__navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__logo">
            <NavLink to={"/"}>
              <h1>LOGO</h1>
            </NavLink>
          </div>
          <div className="navbar__input">
            <input type="text" placeholder="Search product" />
          </div>
          <div className="navbar__links">
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
            <a href="#">contact</a>
            <NavLink to={"/wishlist"}>wishlist</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
