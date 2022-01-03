import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    navigate("/ProductList" + "?" + rec);
  }

  return (
    <nav className="navbar">
      <h3 className="logo">@lineL</h3>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li className="Home">
          <Link className="Home" to="/ProductList?scarpin">
            {" "}
            Sapato Scarpin{" "}
          </Link>
        </li>
        <li className="Home">
          <Link className="Home" to="/ProductList?Sandalia">
            {" "}
            Sandalias{" "}
          </Link>
        </li>
        <li className="Home">
          <Link className="Home" to="/ProductList?tenis">
            {" "}
            Tenis{" "}
          </Link>
        </li>
        <li className="Home">
          <Link className="Home" to="/ProductList?Rasteiras">
            {" "}
            Rasteiras{" "}
          </Link>
        </li>

        <li className="Home">
          <Link className="Sign" to="/login">
            {" "}
            Login{" "}
          </Link>
        </li>
      </ul>
      {/*<ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link className="nav-link" to="/app">
            {" "}
            Dashboard{" "}
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/author">
            {" "}
            Authors{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            {" "}
            About{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/teste">
            {" "}
            Teste{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/teste2">
            {" "}
            Teste2{" "}
          </Link>
        </li>

        {/* <li>
          <Link className="Home" to="/ProductList?scarpin">
            Sapatos Scarpin
          </Link>
        </li>
        <li>
          <Link className="Test1" to="/ProductList?tenis">
            Tenis
          </Link>
        </li>
        <li>
          <Link className="Test1" to="/ProductList?tenis">
            Tenis2
          </Link>
        </li>
        <li>
          <Link className="Test1" to="/ProductList?tenis">
            Tenis3
          </Link>
        </li>
        <li>
          <Link className="Test1" to="/ProductList?tenis">
            Tenis4
          </Link>
        </li>
        <hr></hr>
        <li>
          <Link className="Test3" to="http://trs2500.tk/Login">
            Login
          </Link>
          <hr></hr>
        </li>
         
      </ul>*/}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i class="fas fa-times">X</i>
        ) : (
          <i class="fas fa-bars">Menu</i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
