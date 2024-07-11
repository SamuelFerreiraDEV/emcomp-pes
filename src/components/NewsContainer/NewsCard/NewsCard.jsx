import React from "react"
// import "./styles.css"
import { HomeButton } from "../../HomeButton/HomeButton"
import cardImage from "../../../assets/cardImage.svg"
import calendar from "../../../assets/calendar.svg"
import arrow from "../../../assets/newsCardArrow.svg"

export function NewsCard() {
  return (
    <div className="card-container flex flex-col bg-[#F0F0F0] text-black rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="image-container relative">
        <img className="card-image object-cover rounded-t-2xl" src={cardImage} alt="Imagem do card" />
        <div className="card-image-info flex flex-col w-1/2 gap-1 absolute top-1/2 -translate-y-1/2 items-center text-white text-xs ml-4">
          <h1>RAÇÃO PARA SUÍNOS:</h1>
          <p className="text-sm">boas práticas para uma nutrição saudável.</p>
          <HomeButton sizeClass={"button-size-sm"} text={<small className="text-xs">Saiba mais</small>}/>
        </div>
      </div>
      <div className="card-info-container flex flex-col justify-end items-start m-8 gap-6">
        <div className="date-info flex gap-3 items-center">
          <img className="calendar-icon w-6" src={calendar} alt="icone calendario" />
          <p className="text-theme text-sm">02, Fevereiro 2024</p>
        </div>
        <p className="card-text text-base font-semibold text-start"><strong>RAÇÃO PARA SUÍNOS:</strong> boas práticas para uma nutrição saudável.</p>
        <div className="link-to-info flex gap-4 items-center">
          <a href="/login" className="button-see-more flex items-center gap-2 text-black transition-all duration-500 ease-in-out hover:translate-x-1">
            <img className="arrow-icon w-7" src={arrow} alt="icone de seta" />
            <p className="font-bold tracking-wider">Leia mais</p>
          </a>
        </div>
      </div>
    </div>
  )
}