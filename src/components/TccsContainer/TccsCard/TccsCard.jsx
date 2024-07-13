import React from "react"
// import "./styles.css"
import calendar from "../../../assets/calendar.svg"
import { HomeButton } from "../../HomeButton/HomeButton"

export function TccsCard() {
  return (
    <div className="tccs-card-container row-span1 col-span1 flex flex-col bg-white text-black rounded-xl shadow-[0_2px_8px_0_rgba(0,0,0,0.25)] items-start gap-4 p-4">
      <div className="tccs-card-text flex flex-col text-start font-bold gap-4 ">
        <strong>Estratégias de Controle Sanitário em Granjas de Suínos.</strong>
        <p className="font-normal text-sm">Por: Fulano da Silva</p>
      </div>
      <div className="tccs-card-date-button flex w-full justify-between">
        <div className="tccs-card-date flex gap-2 text-center items-center">
          <img className="tccs-calendar-icon w-5" src={calendar} alt="icone calendario" />
          <p className="tcc-date text-theme text-sm">02, Fevereiro 2024</p>
        </div>
        <HomeButton sizeClass={"tcc"} text={<small>Saiba mais</small>}/>
      </div>
    </div>
  )
}
