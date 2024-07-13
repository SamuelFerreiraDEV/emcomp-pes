import React from "react"
// import "./styles.css"

// eslint-disable-next-line react/prop-types
export function HomeButton({ sizeClass,text }) {

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-5 py-2 text-2xl",
    tcc: "px-2 py-1 text-sm",
  }

  return (
    <button className={`home-button w-fit text-white bg-theme rounded-[5rem] ${sizes[sizeClass]}`}>
      {text}
    </button>
  ) 
}