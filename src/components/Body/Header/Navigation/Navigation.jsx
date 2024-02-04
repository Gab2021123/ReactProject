import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <React.Fragment>
      <nav id="navigation_element">
        <ul className="navigation navigator" id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/ubication">Ubication</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
