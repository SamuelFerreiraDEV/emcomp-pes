import React from "react"
import "./styles.css"

export function Footer() {
  
  let footerInfos = [
    {
      title: `PES\nPlataforma de\nEstudos em\nSuinocultura`,
      ref1: `(32) 91234 5678\nLocalidade`,
      ref2: `(32) 91234 5678\nLocalidade`,
      ref3: "pes@ifsemg.br",
    },
    {
      title: "SOBRE NÓS",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
    {
      title: "NOTÍCIAS",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
    {
      title: "TCCs",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
    {
      title: "PARCERIAS",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
    {
      title: "CONTATOS",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
    {
      title: "PIGMAKER",
      ref1: "Referência 1",
      ref2: "Referência 2",
      ref3: "Referência 3",
    },
  ]

  return (
    <footer className="footer-container">
      <div className="footer-infos">
        {footerInfos.map(({ title, ref1, ref2, ref3 }) => {
          return ( 
            <div className="footer-info" key={title}>
              <p>{title}</p>
              <small>{ref1}</small>
              <small>{ref2}</small>
              <small>{ref3}</small>
            </div>
          )
        })}
      </div>
      <div className="footer-rights">
        © 2024 PES | IFSEMG. Todos os direitos reservados
      </div>
    </footer>
  )

}