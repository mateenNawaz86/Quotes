import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">
            Quotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link aria-current="page" to="/welcome" className="nav-link">
                  Welcome
                </Link>
              </li>
              <li className="nav-item">
                <Link aria-current="page" to="/products" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
