import React from "react"
import styled from "styled-components"
import {
  useGameDispatchContext,
  useGameStateContext,
} from "../utils/gameReducer"
// import music from "../assets/music.mp3"

const TermsAndMusicStyles = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default function TermsAndMusic() {
  const audioRef = React.useRef(null)
  const { audio } = useGameStateContext()
  const dispatch = useGameDispatchContext()

  function handleAudioButton() {
    dispatch({ type: "UPDATE_AUDIO", audio: !audio })
  }

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [audio])

  return (
    <>
      <TermsAndMusicStyles>
        <button
          className="button-alt"
          onClick={handleAudioButton}
          style={{
            textDecoration: !audio ? "line-through 0.2rem solid" : null,
          }}
        >
          Music
        </button>
        <a href="#" className="button-alt">
          Ts & Cs
        </a>
        <audio ref={audioRef} loop />
      </TermsAndMusicStyles>
    </>
  )
}
