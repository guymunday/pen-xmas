import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useGameStateContext } from "../utils/gameReducer"
import findNext from "../assets/find-next.svg"

const SweetToFindContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  pointer-events: none;
`

const SweetToFindStyles = styled(motion.div)`
  background: var(--off-white);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: var(--shadow);
  pointer-events: none;
  position: relative;
  img {
    width: 100px;
    object-fit: cover;
  }
  .find-next-svg {
    width: 98px;
    margin-top: -8px;
  }
  .score-counter {
    background: var(--gold);
    color: var(--off-white);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 20px;
    box-shadow: 2px -2px 5px 2px rgba(0, 0, 0, 0.4);
  }
`

export default function SweetToFind({ image, seconds, timer, loading }) {
  const { score } = useGameStateContext()
  return (
    <>
      <SweetToFindContainer>
        <AnimatePresence>
          {timer > 0 && (
            <SweetToFindStyles
              key="sweets-to-find"
              initial={{ scale: 0 }}
              animate={{ scale: loading ? 0 : 1 }}
              exit={{ scale: 0, transition: { duration: 0.4 } }}
            >
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
                <object
                  data={findNext}
                  type="image/svg+xml"
                  className="find-next-svg"
                  alt="find next"
                />
              </CircularProgressbarWithChildren>
              {score > 0 && (
                <motion.div
                  className="score-counter"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {score}
                </motion.div>
              )}
            </SweetToFindStyles>
          )}
        </AnimatePresence>
      </SweetToFindContainer>
    </>
  )
}
