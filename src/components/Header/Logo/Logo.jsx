import React from "react"
import logo from "../../../assets/logo.svg"
// import "./styles.css"

export function Logo() {
  return (  
    <a href="/" className="logo w-48 ml-16">
      <img src={logo} alt="pes logo" className="w-full h-full"/>
    </a>
  )
}