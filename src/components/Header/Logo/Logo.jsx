import React from "react"
import logo from "../../../assets/logo.svg"
import "./styles.css"

export function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="pes logo" />
    </a>
  )
}