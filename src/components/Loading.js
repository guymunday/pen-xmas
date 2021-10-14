import React from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(360deg);
  }
`

const LoadingStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-indicator {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gold);
    animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  h1 {
    font-size: 60px;
    color: var(--gold);
  }
`

export default function Loading({ play }) {
  return (
    <>
      <LoadingStyles play={play}>
        {play ? <h1>Play!</h1> : <div className="loading-indicator"></div>}
      </LoadingStyles>
    </>
  )
}
