import React from "react";
import banner from "../../assets/banner.webp";
import arrow from "../../assets/bannerArrow.svg";

const scrollToComponent = () => {
  // white
  window.scrollBy({
    top: window.innerHeight * 0.8,
    behavior: "smooth",
  });
};

export function Banner() {
  return (
    <section className="no-select relative h-[90vh]">
      <img src={banner} className="absolute h-full w-full object-cover" />
      <p className="absolute top-1/2 ml-[5vw] -translate-y-1/2 cursor-default leading-tight text-white text-4xl 2xl:text-[5.5rem]">
        <span className="font-bold">P</span>lataforma de
        <br />
        <span className="font-bold">E</span>studos em
        <br />
        <span className="font-bold">S</span>uinocultura
      </p>
      {/* <button className="absolute left-1/2 -translate-x-1/2 bottom-0 h-16 w-16" onClick={scrollToComponent}> */}
      <button
        className="absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2"
        onClick={scrollToComponent}
      >
        <img src={arrow} className="animate-bounce" />
      </button>
    </section>
  );
}
