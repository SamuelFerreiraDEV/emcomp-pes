import React from "react";
import logo from "../../../assets/logo.svg";
// import "./styles.css"

export function Logo() {
  return (
    <a href="/" className="w-40 md:w-48">
      <img src={logo} alt="pes logo" className="h-full w-full" />
    </a>
  );
}
