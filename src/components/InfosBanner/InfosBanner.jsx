import React from "react"
// import "./styles.css"
import whats from "../../assets/whats.svg"
import email from "../../assets/email.svg"
import maps from "../../assets/maps.svg"
import verticalLine from "../../assets/verticalLine.svg"

export function InfosBanner() {

  const infos = [
    {
      logo: whats,
      text_w: "Entre em contato com:",
      text_b: "(32) 1111-1111",
    },
    {
      logo: email,
      text_w: "Mande-nos um email:",
      text_b: "suinocultura.edu@gmail.com",
    },
    {
      logo: maps,
      text_w: "Endereço:",
      text_b: "xxxxxxxxxxxxxxxx",
    }
  ]

  return (
    <div className="infos-container -mt-[10vh] flex bg-theme items-center justify-center p-4">
      {infos.map(({ logo, text_w, text_b }) => {
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