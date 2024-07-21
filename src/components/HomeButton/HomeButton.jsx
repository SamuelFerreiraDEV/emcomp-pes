import React from "react";
// import "./styles.css"

const variants = {
  mobile_md: "px-2 py-1 text-[0.5rem]",
  sm: "px-2 text-xs",
  md: "px-5 py-2 text-2xl",
  tcc: "px-2 py-1 text-sm",
};

export function HomeButton({ sizeClass, text }) {
  return (
    <button
      className={`home-button w-fit rounded-[5rem] bg-theme text-white ${variants[sizeClass]}`}
    >
      {text}
    </button>
  );
}
