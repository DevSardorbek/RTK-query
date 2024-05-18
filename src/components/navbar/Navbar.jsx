import React from "react";
import "../../sass/__navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  let wishlist = useSelector((s) => s.heart.value);
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
            <NavLink to={"/contact"}>Contact</NavLink>
            <div className="wish">
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
              <span>{wishlist.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
