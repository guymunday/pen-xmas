import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import background from "../assets/pen-xmas-landscape.jpg"
import Popup from "../components/Popup"

const GameLandscapeStyles = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .landscape-background-container {
    cursor: grab;
    :active {
      cursor: grabbing;
    }
    img {
      display: block;
      object-fit: cover;
      pointer-events: none;
      touch-action: none;
    }
  }
`

export default function Play() {
  const constainerRef = React.useRef(null)
  const [height, setHeight] = React.useState(1200)

  const handleImageHeight = () => {
    setHeight(
      constainerRef.current.getBoundingClientRect().height > 1000
        ? constainerRef.current.getBoundingClientRect().height + 200
        : 1200
    )
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleImageHeight)
    return () => window.removeEventListener("resize", handleImageHeight)
  }, [])

  return (
    <>
      <GameLandscapeStyles ref={constainerRef}>
        <motion.div
          drag
          dragConstraints={constainerRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}
          className="landscape-background-container"
        >
          <img src={background} alt="" height={height} />
        </motion.div>
      </GameLandscapeStyles>
    </>
  )
}
