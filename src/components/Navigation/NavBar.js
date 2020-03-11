import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/characters">Characters</Link>
    </div>
  );
};

export default NavBar;
