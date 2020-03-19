import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/episodes">
        <span>Episodes</span>
      </Link>
      <Link to="/locations">
        <span>Locations</span>
      </Link>
      <Link to="/characters">
        <span>Characters</span>
      </Link>
    </div>
  );
};

export default NavBar;
