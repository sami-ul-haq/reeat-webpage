import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileView = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileView}>
            SAMI <div className="fab fa-typo3"></div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileView}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileView}
              >
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileView}
              >
                Products
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileView}
              >
                Sign Up
              </Link>
            </li>

            {button && <Button buttonStyle="btn-primary">Sign Up</Button>}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
