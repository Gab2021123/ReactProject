import React from "react";
import "./Body.css";
import Main from "./Main/Main";
import Header from "./Header/Header";
export default function () {
  return (
    <React.Fragment>
      <div className="body">
        <div className="container" id="container">
          <Header />
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
}
