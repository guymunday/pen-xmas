import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useCookies } from "react-cookie"
import { Redirect } from "react-router-dom"
import SweetButton from "../components/SweetButton"
import SweetToFind from "../components/SweetToFind"
import Prize from "../components/Prize"
import {
  useGameDispatchContext,
  useGameStateContext,
} from "../utils/gameReducer"
import { sweetData } from "../utils/sweetData"
import { imagePromise } from "../utils/imagePromise"
import { shuffleArray } from "../utils/shuffleArray"
import background from "../assets/pen-xmas-background.jpg"
import santa from "../assets/sweets/sweets-santa.png"
import Loading from "../components/Loading"

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

  const bronze = 1
  const silver = 3
  const gold = 6
  const platinum = 8

  const bronzeInStock = true
  const silverInStock = true
  const goldInStock = true
  const platinumInStock = true

  const constainerRef = React.useRef(null)
  const [loading, setLoading] = React.useState(true)
  const [height, setHeight] = React.useState(1200)
  const [sweetArray, setSweetArray] = React.useState([])
  const [sweetNumber, setSweetNumber] = React.useState(0)
  const [timer, setTimer] = React.useState(seconds)
  const { open, score, prize, previous, tries } = useGameStateContext()
  const dispatch = useGameDispatchContext()
  const [cookies, setCookie] = useCookies(["playAttempts"])

  function handleImageHeight() {
    setHeight(
      constainerRef.current.getBoundingClientRect().height > 1000
        ? constainerRef.current.getBoundingClientRect().height + 200
        : 1200
    )
  }

  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0)
  tomorrow.setMinutes(0)
  tomorrow.setMilliseconds(0)

  function initCookies() {
    if (!cookies.playAttempts) {
      setCookie("playAttempts", tries, { path: "/", expires: tomorrow })
    }
  }

  function saveToCookies() {
    if (cookies.playAttempts) {
      let attempts = parseInt(cookies.playAttempts, 10) - 1
      setCookie("playAttempts", attempts.toString(), {
        path: "/",
        expires: tomorrow,
      })
    }
  }

  function startNewGame() {
    let shuffledSweets = Array.from(sweetData.keys())

    dispatch({ type: "UPDATE_SCORE", score: 0 })
    dispatch({ type: "UPDATE_PRIZE", prize: "" })

    initCookies()
    shuffleArray(shuffledSweets)
    setSweetArray(shuffledSweets)
    setTimer(seconds)
  }

  React.useEffect(() => {
    imagePromise(setLoading, 4000)
  }, [])

  React.useEffect(() => {
    !loading && startNewGame()
  }, [loading])

  React.useEffect(() => {
    const timeout = setInterval(() => {
      timer > 0 && setTimer(timer - 1)
    }, 1000)
    return () => clearInterval(timeout)
  }, [timer])

  React.useEffect(() => {
    setSweetNumber(sweetArray[score])
  })

  React.useEffect(() => {
    window.addEventListener("resize", handleImageHeight)
    return () => window.removeEventListener("resize", handleImageHeight)
  }, [])

  React.useEffect(() => {
    if (score === platinum - 1) {
      setSweetNumber(99)
    }
  })

  React.useEffect(() => {
    if (timer === 0 || score === platinum) {
      setTimer(0)
      if (score < bronze) {
        dispatch({ type: "UPDATE_PRIZE", prize: "LOST" })
      } else if (score >= bronze && score < silver && bronzeInStock) {
        dispatch({ type: "UPDATE_PRIZE", prize: "BRONZE" })
      } else if (
        (score >= silver && score < gold && silverInStock) ||
        (score >= bronze && score < silver && !bronzeInStock) ||
        (score >= gold && !goldInStock)
      ) {
        dispatch({ type: "UPDATE_PRIZE", prize: "SILVER" })
      } else if (
        (score >= gold && score < platinum && goldInStock) ||
        (score >= silver && score < gold && !silverInStock) ||
        (score >= platinum && !platinumInStock)
      ) {
        dispatch({ type: "UPDATE_PRIZE", prize: "GOLD" })
      } else if (
        (score >= platinum && platinumInStock) ||
        (score >= gold && score < platinum && !goldInStock)
      ) {
        dispatch({ type: "UPDATE_PRIZE", prize: "PLATINUM" })
      }
    }
  }, [timer])

  React.useEffect(() => {
    if (previous === "") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "BRONZE" && prize === "SILVER") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "BRONZE" && prize === "GOLD") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "BRONZE" && prize === "PLATINUM") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "SILVER" && prize === "GOLD") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "SILVER" && prize === "PLATINUM") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    } else if (previous === "GOLD" && prize === "PLATINUM") {
      dispatch({ type: "UPDATE_PREVIOUS_PRIZE", previous: prize })
    }
  }, [prize])

  React.useEffect(() => {
    if (prize) {
      saveToCookies()
    }
  }, [prize])

  if ((parseInt(cookies.playAttempts, 10) <= 0 && !prize) || open === "off") {
    return <Redirect to="/" />
  }

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
                image={sweet.image}
                sweetNumber={sweetNumber}
                seconds={seconds}
                timer={timer}
                setTimer={setTimer}
              />
            )
          })}
          <SweetButton
            key="santa"
            top={39}
            left={41.3}
            id={99}
            image={santa}
            sweetNumber={sweetNumber}
            seconds={seconds}
            timer={timer}
            setTimer={setTimer}
          />
        </motion.div>
      </GameLandscapeStyles>
      <SweetToFind
        image={score < platinum - 1 ? sweetData[sweetNumber]?.image : santa}
        seconds={seconds}
        timer={timer}
        loading={loading}
      />
      {prize && !loading && <Prize startNewGame={startNewGame} />}
      {loading && <Loading play />}
    </>
  )
}
