import React from "react"
// import "./styles.css"
import leftArrow from "../../assets/homeNewsArrowLeft.svg"
import rightArrow from "../../assets/homeNewsArrowRight.svg"
import { NewsCard } from "./NewsCard/NewsCard"

export function NewsContainer() {
  return (
    <div className="news-container flex flex-col items-center justify-center text-center gap-8 text-black70">
      <h1 className=" text-theme text-4xl leading-tight -mb-2">Notícias e eventos</h1>
      <p className="text-2xl leading-tight">Aqui você poderá se manter informado<br/> sobre as principais notícias  e últimos<br/> eventos divulgadas pelo PES.</p>
      <div className="cards-container flex items-center gap-20 my-0 mx-[10vw]">
        <img className="w-8" src={leftArrow} onClick={window.alert}/>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <img className="w-8" src={rightArrow}/>
      </div>
    </div>
  )
}