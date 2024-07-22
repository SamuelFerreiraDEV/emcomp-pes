import React from "react";
// import "./styles.css"
import { HomeContainer } from "../HomeContainer/HomeContainer";
import { CardsContainer } from "./CardsContainer/CardsContainer";

export function NewsContainer() {
  return (
    <HomeContainer
      containerClassName="flex-col gap-8 text-center"
      title="Notícias e eventos"
      subtitle={
        <>
          Aqui você poderá se manter informado
          <br /> sobre as principais notícias e últimos
          <br /> eventos divulgadas pelo PES.
        </>
      }
      children={<CardsContainer />}
    />
  );
}

// <div className="news-container flex flex-col items-center justify-center gap-8 text-center text-black70">
//   <h1 className="-mb-2 text-4xl font-bold leading-tight text-theme">
//     Notícias e eventos
//   </h1>
//   <p className="text-2xl leading-tight">
//     Aqui você poderá se manter informado
//     <br /> sobre as principais notícias e últimos
//     <br /> eventos divulgadas pelo PES.
//   </p>
//   <div className="cards-container mx-[10vw] my-0 flex items-center gap-20">
//     <img className="w-8" src={leftArrow} onClick={window.alert} />
//     <NewsCard />
//     {screenSize > 768 ? <NewsCard /> : null}
//     {screenSize > 1280 ? <NewsCard /> : null}
//     {/* <NewsCard /> */}
//     <img className="w-8" src={rightArrow} />
//   </div>
// </div>
