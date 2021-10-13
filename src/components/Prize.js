import React from "react"
import { useGameStateContext } from "../utils/gameReducer"
import Popup from "./Popup"

export default function Prize({ startNewGame }) {
  const { prize } = useGameStateContext()

  return (
    <>
      <Popup>
        <h1>{prize}</h1>
        <button onClick={startNewGame}>Try again</button>
      </Popup>
    </>
  )
}
