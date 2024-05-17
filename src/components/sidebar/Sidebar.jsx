import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../sass/__sidebar.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-product"}>
            <IoCreateOutline />
            <span>Create Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-product"}>
            <IoCreateOutline />
            <span>Manage Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-user"}>
            <IoCreateOutline />
            <span>Create Users</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-user"}>
            <IoCreateOutline />
            <span>Manage Users</span>
          </NavLink>
        </li>
      </ul>
      <button onClick={handleLogOut}>Log</button>
    </div>
  );
};

export default memo(Sidebar);
