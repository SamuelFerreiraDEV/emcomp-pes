import React from "react"
import welcome from "../../assets/homeWelcome.svg"
import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton"

export function WelcomeContainer() {
  return (
    <div className="welcome-container">
      <div className="welcome-text-container">
        <h1 className="main-theme welcome-title home-title">Bem-vindo a nossa <strong>Plataforma de <br/>Estudos em Suinocultura!</strong></h1>
        <p className="home-subtitle">Aqui você encontrará informações, dicas e as <br/>melhores práticas para otimizar sua criação de <br/>suínos.</p>
        <HomeButton sizeClass={"button-size-md"} text={"Veja como"} />
      </div>
      <div className="welcome-image-container">
        <img src={welcome} alt="imagem bem-vindos" /> 
      </div>
    </div>
  )
}