import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (rec) => {
    teste();
    window.location.href = rec;
    setClick(false);
  };

  const teste = () => {
    console.log("marcel leandro");
  };

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
              onClick={() => closeMobileMenu("/ProductList?Scarpin")}
            >
              Sapato Scarpin {/*<i className="fa fa-caret-down" />*/}
            </Link>
            {/*dropdown && <Dropdown />*/}
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Sapatilha"
              className="nav-links"
              onClick={() => closeMobileMenu("/ProductList?Sapatilha")}
            >
              Sapatilha
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Tenis"
              className="nav-links"
              onClick={() => closeMobileMenu("/ProductList?Tenis")}
            >
              Tenis
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList?Sandalia"
              className="nav-links"
              onClick={() => closeMobileMenu("/ProductList?Sandalia")}
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
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
