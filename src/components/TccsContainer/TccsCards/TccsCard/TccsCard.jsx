import React from "react";
// import "./styles.css"
import calendar from "@/assets/calendar.svg";
import { HomeButton } from "../../../HomeButton/HomeButton";

export function TccsCard() {
  return (
    <div className="row-span1 col-span1 flex flex-col items-start gap-4 rounded-xl bg-white p-4 text-black shadow-[0_2px_8px_0_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-4 text-start font-bold">
        <strong>Estratégias de Controle Sanitário em Granjas de Suínos.</strong>
        <p className="text-sm font-normal">Por: Fulano da Silva</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2 text-center">
          <img className="w-5" src={calendar} alt="icone calendario" />
          <p className="text-sm text-theme">02, Fevereiro 2024</p>
        </div>
        <HomeButton sizeClass={"tcc"} text={<small>Saiba mais</small>} />
      </div>
    </div>
  );
}
