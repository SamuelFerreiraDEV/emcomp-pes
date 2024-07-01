import React from "react"
import "./styles.css"
import leftArrow from "../../assets/homeNewsArrowLeft.svg"
import rightArrow from "../../assets/homeNewsArrowRight.svg"
import { NewsCard } from "./NewsCard/NewsCard"

export function NewsContainer() {
  return (
    <div className="news-container">
      <h1 className="main-theme">Notícias e eventos</h1>
      <p>Aqui você poderá se manter informado<br/> sobre as principais notícias  e últimos<br/> eventos divulgadas pelo PES.</p>
      <div className="news-cards-container">
        <img className="cards-arrow" src={leftArrow} onClick={window.alert}/>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <img className="cards-arrow" src={rightArrow}/>
      </div>
    </div>
  )
}