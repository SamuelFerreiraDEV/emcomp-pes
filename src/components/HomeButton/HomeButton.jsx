import React from "react"
import "./styles.css"

// eslint-disable-next-line react/prop-types
export function HomeButton({ sizeClass,text }) {
  return (
    <button className={`home-button ${sizeClass}`}>{text}</button>
  ) 
}