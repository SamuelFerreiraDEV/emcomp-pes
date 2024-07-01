import React from "react"
import "./styles.css"
import { HomeButton } from "../../HomeButton/HomeButton"
import cardImage from "../../../assets/cardImage.svg"
import calendar from "../../../assets/calendar.svg"
import arrow from "../../../assets/newsCardArrow.svg"

export function NewsCard() {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={cardImage} alt="Imagem do card" />
        <div className="card-image-info">
          <h1>RAÇÃO PARA SUÍNOS:</h1>
          <p>boas práticas para uma nutrição saudável.</p>
          <HomeButton text={"Saiba mais"}/>
        </div>
      </div>
      <div className="card-info-container">
        <div className="date-info">
          <img className="calendar-icon" src={calendar} alt="icone calendario" />
          <p className="date">02, Fevereiro 2024</p>
        </div>
        <p><strong>RAÇÃO PARA SUÍNOS:</strong> boas práticas para uma nutrição saudável.</p>
        <div className="link-to-info">
          <img className="arrow-icon" src={arrow} alt="icone de seta" />
          <p>Leia mais</p>
        </div>
      </div>
    </div>
  )
}