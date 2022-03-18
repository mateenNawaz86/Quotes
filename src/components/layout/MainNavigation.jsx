import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.ui.showMenu);

  const location = useLocation();

  const toggleMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow navbar-dark"
        style={{ backgroundColor: "#20B2AA" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "700", color: "#800080" }}
          >
            Q's
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
            <i
              onClick={toggleMenuHandler}
              className={menu ? "fas fa-times" : "fas fa-bars"}
            />
          </button>
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  aria-current="page"
                  to="/new-quotes"
                  className={`nav-link ${
                    location.pathname === "/new-quotes" ? "active" : ""
                  }`}
                >
                  New Quote
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  aria-current="page"
                  to="/quotes"
                  className={`nav-link ${
                    location.pathname === "/quotes" ? "active" : ""
                  }`}
                >
                  All Quotes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
