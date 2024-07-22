import React from "react";
import leftArrow from "@/assets/homeNewsArrowLeft.svg";
import rightArrow from "@/assets/homeNewsArrowRight.svg";
import { NewsCard } from "./NewsCard/NewsCard";
import { useScreenSize } from "../../../hooks/useScreenSize";

export function CardsContainer() {
  const screenSize = useScreenSize();

  return (
    <div className="mx-[10vw] flex gap-20">
      <img className="w-8" src={leftArrow} />
      <NewsCard />
      {screenSize > 768 ? <NewsCard /> : null}
      {screenSize > 1280 ? <NewsCard /> : null}
      <img className="w-8" src={rightArrow} />
    </div>
  );
}
