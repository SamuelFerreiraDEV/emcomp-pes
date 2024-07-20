import React from "react";
import about from "../../assets/homeAbout.svg";
// import "./styles.css"
import { HomeButton } from "../HomeButton/HomeButton";

export function AboutContainer() {
  return (
    <div className="about-container flex flex-row-reverse justify-evenly">
      <div className="text-container flex flex-col items-center justify-center gap-6 text-center text-black70">
        <h1 className="-mb-2 text-4xl font-bold leading-tight text-theme">
          Sobre nós:
        </h1>
        <p className="text-2xl leading-tight">
          Fundado por pessoas apaixonadas pela suinocultura, nosso
          <br /> site oferece uma ampla gama de recursos, desde artigos
          <br /> científicos e estudos de caso até dicas práticas e notícias
          <br /> do setor. Nosso objetivo é fornecer informações de alta
          <br /> qualidade para produtores, pesquisadores, estudantes e<br />{" "}
          todos aqueles interessados no bem-estar dos suínos e na
          <br /> melhoria contínua das práticas de criação.
        </p>
        <HomeButton sizeClass={"md"} text={"Saiba mais"} />
      </div>
      <div className="about-image-container">
        <img
          src={about}
          alt="imagem sobre"
          className="w-[40vw] rounded-[4rem]"
        />
      </div>
    </div>
  );
}
