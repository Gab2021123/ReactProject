import "boxicons";
import "./App.css";
import React from "react";
import Body from "./components/Body/Body";
import Button from "./components/Button/Button";
import { useContext, useState } from "react";
import { BackgroundContext } from "./components/BackGroundContext";
/* import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom"; */

export default function App() {
  return (
    <React.StrictMode>
      <Body />
      <Button />
    </React.StrictMode>
  );
}
