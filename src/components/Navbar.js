import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="btn text link">
        RandomUser
      </Link>
      <Link to="/markdown" className="btn text link">
        Markdown
      </Link>
      <Link to="/pagination" className="btn text link">
        Pagination
      </Link>
    </nav>
  );
};

export default Navbar;
