import React from "react";
// import "./styles.css"
import { HomeButton } from "../../HomeButton/HomeButton";
import cardImage from "../../../assets/cardImage.svg";
import calendar from "../../../assets/calendar.svg";
import arrow from "../../../assets/newsCardArrow.svg";

export function NewsCard() {
  return (
    <div className="card-container flex flex-col rounded-2xl bg-[#F0F0F0] text-black shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="image-container relative">
        <img
          className="card-image w-full rounded-t-2xl object-cover"
          src={cardImage}
          alt="Imagem do card"
        />
        <div className="card-image-info absolute top-1/2 ml-4 flex w-1/2 -translate-y-1/2 flex-col items-center gap-1 text-sm text-white">
          <h1 className="font-bold">RAÇÃO PARA SUÍNOS:</h1>
          <p className="text-sm">boas práticas para uma nutrição saudável.</p>
          <HomeButton
            sizeClass={"sm"}
            text={<small className="text-xs">Saiba mais</small>}
          />
        </div>
      </div>
      <div className="card-info-container m-8 flex flex-col items-start justify-end gap-6">
        <div className="date-info flex items-center gap-3">
          <img
            className="calendar-icon w-6"
            src={calendar}
            alt="icone calendario"
          />
          <p className="text-sm text-theme">02, Fevereiro 2024</p>
        </div>
        <p className="card-text text-start text-base font-semibold">
          <strong>RAÇÃO PARA SUÍNOS:</strong> boas práticas para uma nutrição
          saudável.
        </p>
        <div className="link-to-info flex items-center gap-4">
          <a
            href="/login"
            className="button-see-more flex items-center gap-2 text-black transition-all duration-500 ease-in-out hover:translate-x-2"
          >
            <img className="arrow-icon w-7" src={arrow} alt="icone de seta" />
            <p className="font-bold tracking-wider">Leia mais</p>
          </a>
        </div>
      </div>
    </div>
  );
}
