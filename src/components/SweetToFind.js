import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

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
  img {
    width: 100px;
    object-fit: cover;
  }
`

export default function SweetToFind({ image, seconds, timer, loading }) {
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
                <p>Find next</p>
              </CircularProgressbarWithChildren>
            </SweetToFindStyles>
          )}
        </AnimatePresence>
      </SweetToFindContainer>
    </>
  )
}
