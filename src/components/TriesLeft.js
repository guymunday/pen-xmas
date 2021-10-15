import React from "react"
import { useCookies } from "react-cookie"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useGameStateContext } from "../utils/gameReducer"
import redBow from "../assets/red-bow.png"

const TriesLeftStyles = styled.div`
  .tries-bows {
    display: flex;
    .tries-bows__bow {
      flex: 1;
      max-width: 100%;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        max-width: 50px;
      }
      span {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--gold);
      }
    }
  }
`

export default function TriesLeft() {
  const { tries } = useGameStateContext()
  const [cookies, setCookies] = useCookies(["playAttempts"])
  const controls = useAnimation()

  React.useEffect(() => {
    setTimeout(() => {
      controls.start((i) => ({
        scale: 1,
        transition: { delay: i * 0.1 },
      }))
    }, 400)
  }, [])

  return (
    <>
      <TriesLeftStyles>
        <div className="tries-bows">
          <div className="tries-bows__bow">
            {parseInt(cookies.playAttempts, 10) >= 1 ||
            !cookies.playAttempts ? (
              <motion.img
                src={redBow}
                alt="red bowtie"
                initial={{ scale: 0 }}
                animate={controls}
                custom={0}
              />
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={controls}
                custom={0}
              />
            )}
          </div>
          <div className="tries-bows__bow">
            {parseInt(cookies.playAttempts, 10) >= 2 ||
            !cookies.playAttempts ? (
              <motion.img
                src={redBow}
                alt="red bowtie"
                initial={{ scale: 0 }}
                animate={controls}
                custom={1}
              />
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={controls}
                custom={1}
              />
            )}
          </div>
          <div className="tries-bows__bow">
            {parseInt(cookies.playAttempts, 10) >= 3 ||
            !cookies.playAttempts ? (
              <motion.img
                src={redBow}
                alt="red bowtie"
                initial={{ scale: 0 }}
                animate={controls}
                custom={2}
              />
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={controls}
                custom={2}
              />
            )}
          </div>
        </div>
        <p>
          {cookies.playAttempts ? parseInt(cookies.playAttempts, 10) : tries} /{" "}
          {tries} attempts remaining
        </p>
      </TriesLeftStyles>
    </>
  )
}
