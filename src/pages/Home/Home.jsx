import React from "react";
// import './styles.css'
import { Banner } from "../../components/Banner/Banner";
import { WelcomeContainer } from "../../components/WelcomeContainer/WelcomeContainer";
import { AboutContainer } from "../../components/AboutContainer/AboutContainer";
import { NewsContainer } from "../../components/NewsContainer/NewsContainer";
import { TccsContainer } from "../../components/TccsContainer/TccsContainer";
import { SponsorsContainer } from "../../components/SponsorsContainer/SponsorsContainer";
import { InfosBanner } from "../../components/InfosBanner/InfosBanner";

export function Home() {
  return (
    <div className="home flex flex-col gap-[20vh]">
      <Banner />
      <WelcomeContainer />
      <AboutContainer />
      <NewsContainer />
      <TccsContainer />
      <SponsorsContainer />
      <InfosBanner />
    </div>
  );
}
