import React from "react"
import styled, { keyframes } from "styled-components"

const CountInStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  .counter {
    font-size: 60px;
    color: var(--gold);
  }
`

export default function setCountIn({ countIn }) {
  return (
    <>
      <CountInStyles>
        <div className="counter">{countIn}</div>
      </CountInStyles>
    </>
  )
}
