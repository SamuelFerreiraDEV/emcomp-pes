import React from "react";
// import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton";
import { HomeContainer } from "../HomeContainer/HomeContainer";
import { TccsCards } from "./TccsCards/TccsCards";

export function TccsContainer() {
  return (
    <HomeContainer
      containerClassName="mx-[20vw] flex flex-col items-center gap-8 leading-4"
      title="TCCs"
      subtitle={`
        Aqui, estudantes e pesquisadores encontram uma variedade de recursos e
        inspirações para a elaborção de seus Trabalhos de Conclusão de Curso
        (TCCs) focados na suinocultura. Oferecemos orientações detalhadas,
        exemplos de projetos bem-sucedidos, e acesso a uma comunidade de
        especialistas prontos para compartihar conhecimentos e apoiar o
        desenvolvimento de novas pesquisas no setor.
      `}
      children={
        <>
          <TccsCards />
          <HomeButton sizeClass={"tcc"} text={"Veja mais"} />
        </>
      }
    />
  );
}

// <div className="tccs-container mx-[20vw] flex flex-col items-center justify-center gap-8 text-center leading-5 text-black70">
//   <h1 className="-mb-2 text-4xl font-bold text-theme">TCCs</h1>
//   <p className="text-2xl">
//     Aqui, estudantes e pesquisadores encontram uma variedade de recursos e
//     inspirações para a elaborção de seus Trabalhos de Conclusão de Curso
//     (TCCs) focados na suinocultura. Oferecemos orientações detalhadas,
//     exemplos de projetos bem-sucedidos, e acesso a uma comunidade de
//     especialistas prontos para compartihar conhecimentos e apoiar o
//     desenvolvimento de novas pesquisas no setor.{" "}
//   </p>
//   <div className="cards-container mx-24 grid grid-cols-2 items-center gap-x-20 gap-y-8">
//     <TccsCard />
//     <TccsCard />
//     <TccsCard />
//     <TccsCard />
//   </div>
//   <HomeButton sizeClass={"tcc"} text={"Veja mais"} />
// </div>
