import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import HomeScreenOne from "../components/home-screens/HomeScreenOne"
import HomeScreenGeneric from "../components/home-screens/HomeScreenGeneric"
import FakePopup from "../components/FakePopup"
import background from "../assets/pen-xmas-background.jpg"
import santa from "../assets/sweets/sweets-santa.png"
import search from "../assets/pen-search.png"
import { imagePromise } from "../utils/imagePromise"
import Loading from "../components/Loading"
import { useGameStateContext } from "../utils/gameReducer"
import HomeScreenOff from "../components/home-screens/HomeScreenOff"
import Popup from "../components/Popup"

const HomeStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .home-background {
    display: block;
    object-fit: cover;
    pointer-events: none;
    touch-action: none;
    height: 100%;
    width: 100%;
  }
`

export default function Home() {
  const [loading, setLoading] = React.useState(true)
  const [pagination, setPagination] = React.useState(0)
  const { open } = useGameStateContext()

  React.useEffect(() => {
    imagePromise(setLoading)
  }, [])

  return (
    <>
      <Header />
      <HomeStyles>
        <img className="home-background" src={background} alt="" />
        <FakePopup loading={loading}>
          {open === "on" ? (
            <>
              {pagination === 0 ? (
                <HomeScreenOne setPagination={setPagination} />
              ) : pagination === 1 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title="Search"
                  image={search}
                  copy="Drag the map to search for the hidden sweets."
                />
              ) : pagination === 2 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title="Click or Tap"
                  image={santa}
                  copy="When you find the sweets in question, click or tap on them to earn points."
                />
              ) : pagination === 3 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title="Win The Scented Bonanza!"
                  image={santa}
                  copy="Find the gummy Father Christmas to win a scented bonanza beyond your wildest dreams!"
                />
              ) : (
                <HomeScreenOne setPagination={setPagination} />
              )}
            </>
          ) : (
            <HomeScreenOff />
          )}
          {open === "on" && (
            <p className="terms">
              Your prize will be added to your basket with an order of £140 or
              more. Limited to 3 plays per day. Peruse the full terms and
              conditions
            </p>
          )}
        </FakePopup>
      </HomeStyles>
      {loading && <Loading />}
    </>
  )
}
