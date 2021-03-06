import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import App from "./App"
import { GlobalProvider } from "./utils/gameReducer"
import reset from "./styles/reset"
import "./styles/oldGame.css"
import global from "./styles/global"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))
