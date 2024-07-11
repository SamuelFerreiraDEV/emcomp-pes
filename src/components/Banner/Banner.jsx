import React from "react"
import banner from "../../assets/banner.webp"
import arrow from "../../assets/bannerArrow.svg"

const scrollToComponent = () => {  // white
  window.scrollBy({
    top: window.innerHeight * 0.8,
    behavior: 'smooth'
  });
};

export function Banner() {
  return (
    <div className="banner-container relative h-[90vh] banner-container no-select">
      <img src={banner} className="banner-img absolute h-full w-full object-cover" />
      <p className="banner-title absolute text-white top-1/2 -translate-y-1/2 ml-[5vw] pl-16 text-[5.5rem] leading-tight">
        <span className="font-bold">P</span>lataforma de
        <br />
        <span className="font-bold">E</span>studos em 
        <br />
        <span className="font-bold">S</span>uinocultura
      </p>
      <button className="h-4 w-4 bg-red-700" onClick={scrollToComponent}>
        <img src={arrow} className="banner-arrow absolute left-1/2 bottom-0 h-16 -translate-x-1/2 -translate-y-1/2 w-fit" />
      </button>
    </div>
  )
}