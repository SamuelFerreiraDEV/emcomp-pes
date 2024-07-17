import React from "react"
import { contactUsInfo } from "../../utils/data"
import verticalLine from "../../assets/verticalLine.svg"

// import "./styles.css"

export function InfosBanner() {

  return (
    <div className="infos-container -mt-[10vh] flex bg-theme items-center justify-center p-4">
      {contactUsInfo.map(({ logo, text_w, text_b }) => {
        return (
          <>
            <div className="info flex flex-col items-center w-1/3 gap-2 text-white font-semibold" key={logo}>
              <img src={logo} alt="info logo" className="w-[3vw]" />
              {text_w}
              <p className="info-b text-black70">{text_b}</p>
            </div>
            <img className="vertical-line w-[0.2%]" src={verticalLine} />
          </>
        )
      })}
    </div>
  )
}