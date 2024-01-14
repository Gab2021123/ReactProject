import { useContext, useState } from "react";
import { BackgroundContext } from "../BackGroundContext";
import "./Button.css";
import React from "react";
export default function Button() {
  const themeBackground = useContext(BackgroundContext);
  const [theme, setTheme] = useState(themeBackground);
  const [value, setValue] = useState(false);
  function handleClick(e) {
    //Operador Ternario
    value ? byDefault() : changeValues();
    setValue(!value);
  }
  function byDefault() {
    const background = document.getElementById("container");
    background.setAttribute("class", "container");
    setTheme("moon");
  }
  //Funcion para cambiar colores
  function changeValues() {
    const background = document.getElementById("container");
    background.setAttribute("class", "changeContainer");
    setTheme("sun");
  }
  return (
    <>
      <button onClick={handleClick} className="box">
        <box-icon name={theme}></box-icon>
      </button>
    </>
  );
}
