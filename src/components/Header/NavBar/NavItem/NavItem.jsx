import React from "react"
// import "./styles.css"

// eslint-disable-next-line react/prop-types
export function NavItem({ href, text }) {
  return (
    <li>
      <a href={href} className="tracking-[.075rem] text-sm">
        {text}
      </a>
    </li>
  )
}