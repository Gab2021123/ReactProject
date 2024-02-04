import React, { useContext, useState } from "react";
import "./Body.css";
import Main from "./Main/Main";
import Header from "./Header/Header";
import BoxIcon from "./Box-Icon/Box-Icon";

export default function Body() {
  return (
    <React.Fragment>
      <div className="body">
        <div className="container" id="container">
          <BoxIcon />
          <Header />
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
}
