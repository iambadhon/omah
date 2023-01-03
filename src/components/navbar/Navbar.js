import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_main">
          <div className="logo">
            <a href="#">
              <img src="images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="nav_item">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">
                  Properties <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
