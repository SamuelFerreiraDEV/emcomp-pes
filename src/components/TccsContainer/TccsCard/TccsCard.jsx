import React from "react"
import "./styles.css"
import calendar from "../../../assets/calendar.svg"
import { HomeButton } from "../../HomeButton/HomeButton"

export function TccsCard() {
  return (
    <div className="tccs-card-container">
      <div className="tccs-card-text">
        <strong>Estratégias de Controle Sanitário em Granjas de Suínos.</strong>
        <p>Por: Fulano da Silva</p>
      </div>
      <div className="tccs-card-date-button">
        <div className="tccs-card-date">
          <img className="tccs-calendar-icon" src={calendar} alt="icone calendario" />
          <p className="main-theme">02, Fevereiro 2024</p>
        </div>
        <HomeButton text={<small>Saiba mais</small>}/>
      </div>
    </div>
  )
}
