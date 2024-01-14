import { useState } from "react";
import React from "react";
import "../Navigation/Navigation.css";

export default function Navigation() {
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <nav id="navigation_element">
        <ul className="navigation navigator">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Ubication</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
