import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  console.log("aqui");

  async function handleSignIn(rec) {
    // eslint-disable-next-line
    navigate(rec);
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <h3 className="logo">@lineL</h3>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link className="subli" to="/" onClick={() => handleSignIn("/")}>
          <li className="Home">Home</li>{" "}
        </Link>
        <Link className="subli" to="">
          <li className="Home">-</li>{" "}
        </Link>
        <Link
          className="subli"
          to="/ProductList?Scarpin"
          onClick={() => handleSignIn("/ProductList?Scarpin")}
        >
          <li className="Home">Scarpin</li>{" "}
        </Link>
        <Link
          className="subli"
          to="/ProductList?Sapatilha"
          onClick={() => handleSignIn("/ProductList?Sapatilha")}
        >
          <li className="Home">Sapatilha</li>
        </Link>
        <Link
          className="subli"
          to="/ProductList?Rasteiras"
          onClick={() => handleSignIn("/ProductList?Rasteira")}
        >
          <li className="Home">Rasteiras</li>{" "}
        </Link>
        <Link
          className="subli"
          to="/ProductList?Sandalia"
          onClick={() => handleSignIn("/ProductList?Sandalia")}
        >
          <li className="Home">Sandalia</li>{" "}
        </Link>
        <Link
          className="subli"
          to="/ProductList?tenis"
          onClick={() => handleSignIn("/ProductList?tenis")}
        >
          <li className="Home">Tenis</li>
        </Link>
        <Link className="subli" to="/ProductList?bolsas">
          <li className="Home">Bolsas</li>{" "}
        </Link>
        <Link className="subli" to="/Login">
          <li className="Home">
            {" "}
            <i className="fa fa-user"> Login</i>
          </li>{" "}
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
