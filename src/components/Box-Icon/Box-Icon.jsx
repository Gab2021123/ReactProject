import "boxicons";
import React from "react";
import "./Box-icon.css";

export default function BoxIcon({ click }) {
  let counter = 0;

  function handleClickClose(e) {
    let navigation_element = document.getElementById("navigation_element");
    navigation_element.style.display = "flex";
  }
  const addFlexAsync = async (element) => {
    return;
  };

  return (
    <React.Fragment>
      <button onClick={handleClickClose} className="show">
        <box-icon name="menu" size="sm"></box-icon>
      </button>
    </React.Fragment>
  );
}
