import React from "react"
// import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton"
import { TccsCard } from "./TccsCard/TccsCard"

export function TccsContainer() {
  return (
    <div className="tccs-container flex flex-col items-center justify-center text-center leading-5 gap-8 text-black70 mx-[20vw]">
      <h1 className="text-theme text-4xl -mb-2 font-bold">TCCs</h1>
      <p className="text-2xl">Aqui, estudantes e pesquisadores encontram uma variedade de recursos e inspirações para a elaborção de seus Trabalhos de Conclusão de Curso (TCCs) focados na suinocultura. Oferecemos orientações detalhadas, exemplos de projetos bem-sucedidos, e acesso a uma comunidade de especialistas prontos para compartihar conhecimentos e apoiar o desenvolvimento de novas pesquisas no setor. </p>
      <div className="cards-container grid grid-cols-2 items-center gap-y-8 gap-x-20 mx-24">
        <TccsCard />
        <TccsCard />
        <TccsCard />
        <TccsCard /> 
      </div>
      <HomeButton sizeClass={"tcc"} text={"Veja mais"}/>
    </div>
  )
}