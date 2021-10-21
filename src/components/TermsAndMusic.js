import React from "react"
import styled from "styled-components"
import {
  useGameDispatchContext,
  useGameStateContext,
} from "../utils/gameReducer"

const TermsAndMusicStyles = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: ${(props) => (props.play ? "fixed" : null)};
  bottom: ${(props) => (props.play ? "0" : null)};
  padding: ${(props) => (props.play ? "20px" : null)};
  .button-alt {
    color: ${(props) => (props.play ? "var(--off-white)" : null)};
  }
`

export default function TermsAndMusic({ play, ...rest }) {
  const { audio, termsUrl } = useGameStateContext()
  const dispatch = useGameDispatchContext()

  function handleAudioButton() {
    dispatch({ type: "UPDATE_AUDIO", audio: !audio })
    localStorage.setItem("music", `${!audio}`)
  }

  return (
    <>
      <TermsAndMusicStyles play={play} {...rest}>
        <button
          className="button-alt"
          onClick={handleAudioButton}
          style={{
            textDecoration: !audio ? "line-through 0.2rem solid" : null,
          }}
        >
          Music
        </button>
        <a
          href={termsUrl}
          target="_blank"
          rel="noreferrer"
          className="button-alt"
        >
          Ts & Cs
        </a>
      </TermsAndMusicStyles>
    </>
  )
}
