import React from "react"
import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton"
import { TccsCard } from "./TccsCard/TccsCard"

export function TccsContainer() {
  return (
    <div className="tccs-container">
      <h1 className="main-theme home-title">TCCs</h1>
      <p className="home-subtitle">Aqui, estudantes e pesquisadores encontram uma variedade de recursos e inspirações para a elaborção de seus Trabalhos de Conclusão de Curso (TCCs) focados na suinocultura. Oferecemos orientações detalhadas, exemplos de projetos bem-sucedidos, e acesso a uma comunidade de especialistas prontos para compartihar conhecimentos e apoiar o desenvolvimento de novas pesquisas no setor. </p>
      <div className="tccs-cards-container">
        <TccsCard />
        <TccsCard />
        <TccsCard />
        <TccsCard /> 
      </div>
      <HomeButton text={"Veja mais"}/>
    </div>
  )
}