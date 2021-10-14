import React from "react"
import { useCookies } from "react-cookie"
import { useGameStateContext } from "../utils/gameReducer"
import Popup from "./Popup"

export default function Prize({ startNewGame }) {
  const { prize, score } = useGameStateContext()
  const [cookies, setCookies] = useCookies()

  return (
    <>
      <Popup>
        <h1>{prize}</h1>
        <p>Score: {score}</p>
        <button onClick={startNewGame}>Try again</button>
        <div>{cookies.playAttempts}</div>
        <p>Terms</p>
      </Popup>
    </>
  )
}
