import React from "react";
import { contactUsInfo } from "../../utils/data";
import verticalLine from "../../assets/verticalLine.svg";

// import "./styles.css"

export function InfosBanner() {
  return (
    <div className="infos-container -mt-[10vh] flex items-center justify-center bg-theme p-4">
      {contactUsInfo.map(({ logo, text_w, text_b }) => {
        return (
          <>
            <div
              className="info flex w-1/3 flex-col items-center gap-2 font-semibold text-white"
              key={logo}
            >
              <img src={logo} alt="info logo" className="w-[3vw]" />
              {text_w}
              <p className="info-b text-black70">{text_b}</p>
            </div>
            <img className="vertical-line w-[0.2%]" src={verticalLine} />
          </>
        );
      })}
    </div>
  );
}
