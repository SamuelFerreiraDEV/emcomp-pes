import React from "react"
import banner from "../../assets/banner.webp"
import arrow from "../../assets/bannerArrow.svg"
import "./styles.css"

export function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} className="banner-img" />
      <p className="title">
        <span className="bold-first-letter">P</span>lataforma de 
        <br />
        <span className="bold-first-letter">E</span>studos em 
        <br />
        <span className="bold-first-letter">S</span>uinocultura
      </p>
      <img src={arrow} className="banner-arrow" />
    </div>
  )
}