import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/Login">
      <button className="btn">Login</button>
    </Link>
  );
}

export default Button;
