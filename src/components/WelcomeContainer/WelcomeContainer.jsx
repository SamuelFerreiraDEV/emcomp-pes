import React from "react"
import welcome from "../../assets/homeWelcome.svg"
// import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton"

export function WelcomeContainer() {
  return (
    <div className="welcome-container flex justify-evenly -mt-[6vh]">
      <div className="text-container flex flex-col items-center justify-center text-center leading-tight gap-6 text-black70">
        <h1 className=" text-theme text-4xl -mb-2">Bem-vindo a nossa <strong>Plataforma de <br/>Estudos em Suinocultura!</strong></h1>
        <p className="text-2xl">Aqui você encontrará informações, dicas e as <br/>melhores práticas para otimizar sua criação de <br/>suínos.</p>
        <HomeButton sizeClass={"button-size-md"} text={"Veja como"} />
      </div>
      <div className="welcome-image-container">
        <img src={welcome} alt="imagem bem-vindos" className="w-[40vw] rounded-[4rem]"/> 
      </div>
    </div>
  )
}