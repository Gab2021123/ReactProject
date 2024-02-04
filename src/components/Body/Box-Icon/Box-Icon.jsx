import "boxicons";

import "./Box-icon.css";
import { useState } from "react";
import Main from "../Main/Main";
export default function BoxIcon() {
  const [viewMain, setViewMain] = useState(true);
  function a(element) {
    element.parentElement.style.display = "flex";
    element.parentElement.nextElementSibling.style.display = "none";
    element.parentElement.nextElementSibling.nextElementSibling.style.display =
      "none";
  }
  function b(element) {
    element.parentElement.style.display = "none";
    element.parentElement.nextElementSibling.removeAttribute("style");
    element.parentElement.nextElementSibling.nextElementSibling.removeAttribute(
      "style"
    );
  }
  function handleClick() {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("appendNavi");
    viewMain ? a(navigation) : b(navigation);

    setViewMain(!viewMain);
  }

  return (
    <>
      <button onClick={handleClick} className="show">
        <box-icon name="menu" size="sm"></box-icon>
      </button>
    </>
  );
}
