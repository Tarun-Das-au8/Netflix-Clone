import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../images/NetflixLogo.svg";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="logo" id="logo" to="/">
        <img src={NetflixLogo} alt="" />
      </Link>
      <ul>
        <li className="tabs">
          <Link className="tabs-link" to="/">
            <i class="fas fa-home"></i>&nbsp;Home
          </Link>
        </li>
        <li className="tabs">
          <Link className="tabs-link" to="/Plan">
            Plan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
