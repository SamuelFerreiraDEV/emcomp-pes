import React from "react";
// import "./styles.css"
import calendar from "../../../assets/calendar.svg";
import { HomeButton } from "../../HomeButton/HomeButton";

export function TccsCard() {
  return (
    <div className="tccs-card-container row-span1 col-span1 flex flex-col items-start gap-4 rounded-xl bg-white p-4 text-black shadow-[0_2px_8px_0_rgba(0,0,0,0.25)]">
      <div className="tccs-card-text flex flex-col gap-4 text-start font-bold">
        <strong>Estratégias de Controle Sanitário em Granjas de Suínos.</strong>
        <p className="text-sm font-normal">Por: Fulano da Silva</p>
      </div>
      <div className="tccs-card-date-button flex w-full justify-between">
        <div className="tccs-card-date flex items-center gap-2 text-center">
          <img
            className="tccs-calendar-icon w-5"
            src={calendar}
            alt="icone calendario"
          />
          <p className="tcc-date text-sm text-theme">02, Fevereiro 2024</p>
        </div>
        <HomeButton sizeClass={"tcc"} text={<small>Saiba mais</small>} />
      </div>
    </div>
  );
}
