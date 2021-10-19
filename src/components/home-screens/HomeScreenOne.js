import React from "react"
import { useCookies } from "react-cookie"
import TriesLeft from "../TriesLeft"
import badge from "../../assets/pen-badge.png"
import emptyJar from "../../assets/empty-jar.png"
import { useGameDispatchContext } from "../../utils/gameReducer"

export default function HomeScreenOne({ setPagination }) {
  const [cookies, setCookies] = useCookies()
  const dispatch = useGameDispatchContext()

  function handleButtonClick() {
    setPagination(1)
    dispatch({ type: "UPDATE_AUDIO", audio: true })
  }

  return (
    <>
      {parseInt(cookies.playAttempts, 10) > 0 || !cookies.playAttempts ? (
        <>
          <img
            style={{ display: "block", width: "100%", objectFit: "cover" }}
            src={badge}
            alt="Penhaligon's"
          />
          <p>
            The nasal confectioner gets terribly cheeky this time of year. He’s
            hidden some sweets around the factory and we need your help locating
            them.
          </p>
          <button className="button" onClick={handleButtonClick}>
            Get Searching
          </button>
        </>
      ) : (
        <>
          <h1>You're Keen</h1>
          <img
            style={{ height: 180, margin: "0 auto 20px" }}
            src={emptyJar}
            alt="Penhaligon's"
          />
          <p>
            You don’t want to strain your eyes, now. You’ve had all your tries
            for today, but do come back tomorrow to see how many sweets you can
            spot. For now, peruse some other sweet-scented delights, won’t you?
          </p>
          <a className="button" href="https://www.penhaligons.com">
            Continue Shopping
          </a>
        </>
      )}
      <TriesLeft />
    </>
  )
}
