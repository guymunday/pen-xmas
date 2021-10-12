import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useGameStateContext } from "../utils/gameReducer"
import { sweetData } from "../utils/sweetData"
import background from "../assets/pen-xmas-background.jpg"
import SweetButton from "../components/SweetButton"
import SweetToFind from "../components/SweetToFind"

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
    position: relative;
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
  const seconds = 60

  const constainerRef = React.useRef(null)
  const [height, setHeight] = React.useState(1200)
  const [sweetArray, setSweetArray] = React.useState([])
  const [sweetNumber, setSweetNumber] = React.useState(0)
  const [timer, setTimer] = React.useState(seconds)
  const { score } = useGameStateContext()

  function handleImageHeight() {
    setHeight(
      constainerRef.current.getBoundingClientRect().height > 1000
        ? constainerRef.current.getBoundingClientRect().height + 200
        : 1200
    )
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  function startNewGame() {
    let shuffledSweets = Array.from(sweetData.keys())
    shuffleArray(shuffledSweets)
    setSweetArray(shuffledSweets)
    setTimer(seconds)
  }

  React.useEffect(() => {
    startNewGame()
  }, [])

  React.useEffect(() => {
    setSweetNumber(sweetArray[score])
  })

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
          {sweetData.map((sweet, i) => {
            return (
              <SweetButton
                key={sweet.id}
                top={sweet.top}
                left={sweet.left}
                id={sweet.id}
                sweetNumber={sweetNumber}
                setSweetNumber={setSweetNumber}
                sweetArray={sweetArray}
              />
            )
          })}
        </motion.div>
      </GameLandscapeStyles>
      <SweetToFind image={sweetData[sweetNumber]?.image} />
    </>
  )
}
