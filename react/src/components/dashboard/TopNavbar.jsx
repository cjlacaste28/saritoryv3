import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft, FaAlignJustify } from "react-icons/fa";
import logo from "../../assets/SARITORY2.png"

const TopNavbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-info wew" onClick={props.toggleSidebarStatus}>
          <FaAlignLeft />
        </button>
        <button
          className="btn d-inline-block d-lg-none ml-auto burgerMenu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavbar"
          aria-controls="topNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaAlignJustify />
        </button>

        <div className="collapse navbar-collapse" id="topNavbar">
          <ul className="nav navbar-nav ml-auto tabmobile-center me-lg-3">
            <li className="nav-item dropdown" id="usernameArea">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                id="username"
              >
                USERNAME
                <span>
                  <img src={logo} width="50" alt="" />
                </span>
              </a>

              <ul className="dropdown-menu tabmobile-center" id="topNavbar__dropdown">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Settings
                  </NavLink>
                </li>
                <hr />
                <li id="logout">
                  <NavLink className="dropdown-item" to="#">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;