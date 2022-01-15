import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (rec) => {
    setClick(false);
  };

  return (
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
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductList?Scarpin"
            className="nav-links"
            onClick={() => closeMobileMenu("/ProductList?Scarpin")}
          >
            Sapato Scarpin
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductList1?Tenis"
            className="nav-links"
            onClick={() => closeMobileMenu}
          >
            Tenis
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductList3?Sandalia"
            className="nav-links"
            onClick={() => closeMobileMenu}
          >
            Sandalia
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ProductList4?Bolsas"
            className="nav-links"
            onClick={() => closeMobileMenu}
          >
            Bolsas
          </Link>
        </li>

        <li>
          <Link to="/login" className="nav-links-mobile">
            <i className="fa fa-user"> Login</i>
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
