import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  useGameDispatchContext,
  useGameStateContext,
} from "../utils/gameReducer"

const SweetButtonStyles = styled(motion.button)`
  display: block;
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}%` : "unset")};
  left: ${(props) => (props.left ? `${props.left}%` : "unset")};
  background: transparent;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :focus,
  :active {
    outline: none;
    border: none;
  }
  img {
    display: block;
    width: 80px;
  }
`

export default function SweetButton({
  sweetNumber,
  top,
  left,
  id,
  image,
  seconds,
  secondsToAdd,
  timer,
  setTimer,
  ...rest
}) {
  const [clicked, setClicked] = React.useState(false)
  const dispatch = useGameDispatchContext()
  const { score } = useGameStateContext()

  function handleClick() {
    dispatch({ type: "UPDATE_SCORE", score: score + 1 })
    setClicked(!clicked)
    if (timer > seconds - secondsToAdd) {
      setTimer(seconds)
    } else {
      setTimer(timer + secondsToAdd)
    }
  }

  const variants = {
    initial: { opacity: 0, scale: 1 },
    animation: {
      opacity: [0, 0.9, 0],
      scale: [1, 1.8, 1],
      transition: { duration: 0.8 },
    },
  }

  return (
    <>
      <SweetButtonStyles
        className="sweet-button"
        onClick={handleClick}
        disabled={sweetNumber !== parseInt(id, 10)}
        top={top}
        left={left}
        data-sweet-id={id}
        {...rest}
      >
        <motion.img
          src={image}
          alt=""
          variants={variants}
          initial="initial"
          animate={
            clicked
              ? "animation"
              : // : sweetNumber === parseInt(id, 10) && timer === 10
                // ? "animation"
                "initial"
          }
          onAnimationComplete={() => setClicked(false)}
        />
      </SweetButtonStyles>
    </>
  )
}
