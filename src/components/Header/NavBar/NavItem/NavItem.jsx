import React from "react"
import "./styles.css"

// eslint-disable-next-line react/prop-types
export function NavItem({ href, text }) {
  return (
    <li>
      <a href={href}>
        {text}
      </a>
    </li>
  )
}