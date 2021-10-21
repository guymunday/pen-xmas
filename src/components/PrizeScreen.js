import React from "react"
import { useCookies } from "react-cookie"
import AjaxButton from "./AjaxButton"
import ContinueShoppingButton from "./ContinueShoppingButton"
import TriesLeft from "./TriesLeft"

export default function PrizeScreen({
  title,
  image,
  text,
  button,
  lost,
  prize,
  playAgain,
  shopOn,
  startNewGame,
  termsText,
  termsLinkText,
  termsLink,
  redirectMessage,
  redirectTitle,
}) {
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [cookies, setCookies] = useCookies()

  return (
    <>
      <h1> {formSubmitted ? redirectTitle : title}</h1>
      <img src={image} alt="prize" height="180" />
      <p>{formSubmitted ? redirectMessage : text}</p>
      {!lost && (
        <AjaxButton
          prize={prize}
          setFormSubmitted={setFormSubmitted}
          style={{
            opacity: formSubmitted ? 0 : null,
            height: formSubmitted ? 0 : null,
          }}
        >
          {button}
        </AjaxButton>
      )}
      {!formSubmitted && (
        <>
          {parseInt(cookies.playAttempts, 10) >= 1 ? (
            <button className="button" onClick={startNewGame}>
              {playAgain}
            </button>
          ) : (
            <ContinueShoppingButton>{shopOn}</ContinueShoppingButton>
          )}
          <TriesLeft />
          <p className="terms">
            {termsText}{" "}
            <a
              href={termsLink}
              target="_blank"
              rel="noreferrer"
              className="terms"
            >
              {termsLinkText}
            </a>
          </p>
        </>
      )}
    </>
  )
}
