import React from "react"
import styled from "styled-components"
import {
  useGameDispatchContext,
  useGameStateContext,
} from "../utils/gameReducer"

const SweetButtonStyles = styled.button`
  display: block;
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}%` : "unset")};
  left: ${(props) => (props.left ? `${props.left}%` : "unset")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}%` : "unset")};
  right: ${(props) => (props.right ? `${props.right}%` : "unset")};
  background: blue;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid white;
  outline: none;
  color: white;
  opacity: 0.5;
`

export default function SweetButton({
  sweetNumber,
  top,
  left,
  bottom,
  right,
  id,
  ...rest
}) {
  const dispatch = useGameDispatchContext()
  const { score } = useGameStateContext()

  function handleClick() {
      dispatch({ type: "UPDATE_SCORE", score: score + 1 })
  }

  return (
    <>
      <SweetButtonStyles
        className="sweet-button"
        onClick={handleClick}
        disabled={sweetNumber !== parseInt(id, 10)}
        top={top}
        left={left}
        bottom={bottom}
        right={right}
        data-sweet-id={id}
        {...rest}
      >
        {score}
      </SweetButtonStyles>
    </>
  )
}
