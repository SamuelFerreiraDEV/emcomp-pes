import React from "react"
import "./styles.css"
import sponsor1 from "../../assets/sponsor1.svg"
import sponsor2 from "../../assets/sponsor2.svg"
import sponsor3 from "../../assets/sponsor3.svg"
import sponsor4 from "../../assets/sponsor4.svg"
import sponsor5 from "../../assets/sponsor5.svg"

export function Sponsors() {

  let sponsors = [
    {
      logo: sponsor1,
    },
    {
      logo: sponsor2,
    },
    {
      logo: sponsor3,
    },
    {
      logo: sponsor4,
    },
    {
      logo: sponsor5,
    }
  ]

  return (
    <div className="sponsors-container">
      <h1 className="main-theme">Patrocinadores</h1>
      <div className="sponsors-logos">
        {sponsors.map(({ logo }) => {
          return <img className="sponsor-logo" src={logo} key={logo}/>
        })}
      </div>
    </div>
  )
}