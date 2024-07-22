import React from "react";
// import "./styles.css"
import { HomeContainer } from "../HomeContainer/HomeContainer";
import { Sponsors } from "./Sponsors/Sponsors";

export function SponsorsContainer() {
  return (
    <HomeContainer
      containerClassName="flex-col gap-8"
      title="Patrocinadores"
      children={<Sponsors />}
    />
  );
}

// <div className="sponsors-container flex flex-col items-center gap-8">
//   <h1 className="-mb-2 text-4xl font-bold text-theme">Patrocinadores</h1>
//   <div className="sponsors-logos flex items-center justify-center gap-[4vw]">
//     {sponsors.map(({ logo }) => {
//       return (
//         <img className="sponsor-logo w-[10vw]" src={logo} key={logo} />
//       );
//     })}
//   </div>
// </div>
