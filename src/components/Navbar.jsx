import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          @lineL
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/ProductList?Scarpin"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sapato Scarpin {/*<i className="fa fa-caret-down" />*/}
            </Link>
            {/*dropdown && <Dropdown />*/}
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Sapatilha"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sapatilha
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Rasteiras"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Rasteiras
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Sandalia"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sandalia
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <i className="fa fa-user"> login</i>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
