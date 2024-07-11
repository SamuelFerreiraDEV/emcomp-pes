import React from "react"
import { AppRoutes } from "./routes/AppRoutes"
import { Header } from "./components/Header/Header"
// import { Footer } from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </>
)
}
