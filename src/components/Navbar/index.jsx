import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <Link className="nav__brand" to="/">
            UPlay
          </Link>
        </div>
        <div className="nav__links">
          <ul className="nav__list"></ul>

          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                <span>Login</span>
                <i className="ri-user-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
