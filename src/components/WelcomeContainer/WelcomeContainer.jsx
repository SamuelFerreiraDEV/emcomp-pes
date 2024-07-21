import React from "react";
import welcome from "../../assets/homeWelcome.svg";
// import "./styles.css"
import { HomeContainer } from "../HomeContainer/HomeContainer";

export function WelcomeContainer() {
  return (
    <HomeContainer
      title={
        <>
          <span
            style={{
              fontWeight: "normal",
            }}
          >
            Bem-vindo a nossa{" "}
          </span>
          Plataforma de <br />
          Estudos em Suinocultura!
        </>
      }
      subtitle={
        <>
          Aqui você encontrará informações, dicas e as <br />
          melhores práticas para otimizar sua criação de <br />
          suínos.
        </>
      }
      buttonText="Veja mais"
      buttonSize="md"
      children={
        <>
          <img
            src={welcome}
            alt="imagem bem-vindos"
            className="w-[40vw] rounded-2xl 2xl:rounded-[4rem]"
          />
        </>
      }
    />
  );
}

/* <div className="welcome-container -mt-[6vh] flex justify-evenly">
    <div className="text-container flex flex-col items-center justify-center gap-2 text-center leading-tight text-black70 xl:gap-6">
      <h1 className="text-[0.75rem] text-theme xl:text-4xl">
        Bem-vindo a nossa{" "}
        <strong>
          Plataforma de <br />
          Estudos em Suinocultura!
        </strong>
      </h1>
      <p className="text-[0.5rem] xl:text-2xl">
        Aqui você encontrará informações, dicas e as <br />
        melhores práticas para otimizar sua criação de <br />
        suínos.
      </p>
      <HomeButton
        sizeClass={screenSize < 768 ? "mobile_md" : "md"}
        text={"Veja como"}
      />
    </div>
    <div className="welcome-image-container">
      <img
        src={welcome}
        alt="imagem bem-vindos"
        className="w-[40vw] rounded-2xl 2xl:rounded-[4rem]"
      />
    </div>
  </div> */
