import React from "react"
import userIcon from "../../../../assets/userIcon.svg"
// import "./styles.css"

export function UserButton() {
  return (
    <a href="/login">
      <img src={userIcon} alt="user button"></img>
    </a>
  )
}