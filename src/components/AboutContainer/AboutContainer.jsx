import React from "react"
import about from "../../assets/homeAbout.svg"
import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton"

export function AboutContainer() {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1 className="main-theme">Sobre nós:</h1>
        <p>Fundado por pessoas apaixonadas pela suinocultura, nosso<br/> site oferece uma ampla gama de recursos, desde artigos<br/> científicos e estudos de caso até dicas práticas e notícias<br/> do setor. Nosso objetivo é fornecer informações de alta<br/> qualidade para produtores, pesquisadores, estudantes e<br/> todos aqueles interessados no bem-estar dos suínos e na<br/> melhoria contínua das práticas de criação.</p>
        <HomeButton text={"Saiba mais"} />
      </div>
      <div className="about-image-container">
        <img src={about} alt="imagem sobre" /> 
      </div>
    </div>
  )
}