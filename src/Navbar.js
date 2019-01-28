import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/random">Random Dog</Link>
      <Link to="/by_breed">Random By Breed</Link>
    </nav>
  );
};

export default Navbar;
