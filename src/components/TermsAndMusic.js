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
    &.music-paused {
      text-decoration: line-through;
      text-decoration: line-through 0.2rem solid;
    }
  }
`

export default function TermsAndMusic({ play, ...rest }) {
  const { audio, termsUrl } = useGameStateContext()
  const dispatch = useGameDispatchContext()

  function handleAudioButton() {
    audio
      ? document.getElementById("music").pause()
      : document.getElementById("music").play()
    dispatch({ type: "UPDATE_AUDIO", audio: !audio })
    localStorage.setItem("music", `${!audio}`)
  }

  return (
    <>
      <TermsAndMusicStyles play={play} {...rest}>
        <button
          className={`button-alt ${!audio ? "music-paused" : ""}`}
          onClick={handleAudioButton}
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
