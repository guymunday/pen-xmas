import React from "react"
import { useCookies } from "react-cookie"
import { useGameStateContext } from "../utils/gameReducer"
import AjaxButton from "./AjaxButton"
import Popup from "./Popup"
import TriesLeft from "./TriesLeft"
import emptyJar from "../assets/empty-jar.png"
import ContinueShoppingButton from "./ContinueShoppingButton"

export default function Prize({ startNewGame }) {
  const { prize, previous, score } = useGameStateContext()
  const [cookies, setCookies] = useCookies()

  if (
    parseInt(cookies.playAttempts, 10) === 0 &&
    prize === "LOST" &&
    previous !== "LOST"
  )
    return (
      <>
        <Popup>
          <h1>Game Over</h1>
          <img src={emptyJar} alt="lost" height="180" />
          <p>Nobody leaves empty handed. Here's your previous prize.</p>
          <AjaxButton>Add to basket</AjaxButton>
          <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
          <TriesLeft />
          <p className="terms">
            Your prize will be added to your basket with an order of £140 or
            more. Limited to 3 plays per day. Peruse the full terms and
            conditions
          </p>
        </Popup>
      </>
    )

  return (
    <>
      <Popup>
        {prize === "LOST" ? <h1>Oh Blast!</h1> : <h1>Game Over</h1>}
        <img src={emptyJar} alt="lost" height="180" />
        {prize === "LOST" && (
          <p>
            You need a bit of practice, old bean. You have not won a prize this
            time.
          </p>
        )}
        {prize === "BRONZE" && (
          <p>Not too shabby! You found {score} sweets. Here is your prize.</p>
        )}
        {prize === "SILVER" && (
          <p>Good spot! You found {score} sweets. Here is your prize.</p>
        )}
        {prize === "GOLD" && (
          <p>
            I say, bravo! You spotted {score} sweets, the jackpot prize is
            yours!
          </p>
        )}
        {prize === "PLATINUM" && (
          <p>
            Eagle eyes! You spotted {score - 1} sweets and the gummy Father
            Christmas. Add to basket to reveal your prize.
          </p>
        )}
        {prize !== "LOST" && <AjaxButton>Add to basket</AjaxButton>}
        {parseInt(cookies.playAttempts, 10) >= 1 ? (
          <button className="button" onClick={startNewGame}>
            Have another try
          </button>
        ) : (
          <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
        )}
        <TriesLeft />
        <p className="terms">
          Your prize will be added to your basket with an order of £140 or more.
          Limited to 3 plays per day. Peruse the full terms and conditions
        </p>
      </Popup>
    </>
  )
}
