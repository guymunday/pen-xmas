import React from "react"
import styled from "styled-components"

const TermsAndMusicStyles = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default function TermsAndMusic() {
  return (
    <>
      <TermsAndMusicStyles>
        <button className="button-alt">Music</button>
        <a href="#" className="button-alt">
          Ts & Cs
        </a>
      </TermsAndMusicStyles>
    </>
  )
}
