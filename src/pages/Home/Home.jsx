import React from "react"
import './styles.css'
import { Banner } from "../../components/Banner/Banner"
import { WelcomeContainer } from "../../components/WelcomeContainer/WelcomeContainer"
import { AboutContainer } from "../../components/AboutContainer/AboutContainer"
import { NewsContainer } from "../../components/NewsContainer/NewsContainer"

export function Home() {

  return (
    <div className="home">
      <Banner />
      <WelcomeContainer />
      <AboutContainer />
      <NewsContainer />
    </div>
  )
}