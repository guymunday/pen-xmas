import React from "react"
import styled from "styled-components"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const SweetToFindStyles = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--off-white);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  img {
    width: 100px;
    object-fit: cover;
  }
`

export default function SweetToFind({ image, seconds, timer }) {
  return (
    <>
      <SweetToFindStyles>
        <CircularProgressbarWithChildren
          value={timer}
          minValue={0}
          maxValue={seconds}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "var(--gold)",
            trailColor: "var(--off-white)",
          })}
        >
          {image && <img src={image} alt="" />}
          <p>Find next</p>
        </CircularProgressbarWithChildren>
      </SweetToFindStyles>
    </>
  )
}
