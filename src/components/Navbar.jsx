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
    console.log(rec);
    navigate(rec);
  }

  return (
    <nav className="navbar">
      <h3 className="logo">@lineL</h3>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/">
          <li className="Home">Home</li>{" "}
        </Link>
        <Link to="">
          <li className="Home">-</li>{" "}
        </Link>
        <Link to="/3">
          <li className="Home">Scarpin</li>{" "}
        </Link>
        <Link to="/4">
          <li className="Home">Sapatilha</li>
        </Link>
        <Link to="/5">
          <li className="Home">Rasteiras</li>{" "}
        </Link>
        <Link to="/6">
          <li className="Home">Sandalia</li>{" "}
        </Link>
        <Link to="/7">
          <li className="Home">Tenis</li>
        </Link>
        <Link to="/8">
          <li className="Home">Bolsas</li>{" "}
        </Link>
        <Link to="/Login">
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
