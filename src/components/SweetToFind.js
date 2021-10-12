import React from "react"
import styled from "styled-components"

const SweetToFindStyles = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--off-white);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
  }
`

export default function SweetToFind({ image }) {
  return (
    <>
      <SweetToFindStyles>
        {image && <img src={image} alt="" />}
      </SweetToFindStyles>
    </>
  )
}
