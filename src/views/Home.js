import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import HomeScreenOne from "../components/home-screens/HomeScreenOne"
import HomeScreenGeneric from "../components/home-screens/HomeScreenGeneric"
import FakePopup from "../components/FakePopup"
import background from "../assets/pen-xmas-background.jpg"
import { imagePromise } from "../utils/imagePromise"
import Loading from "../components/Loading"
import { useGameStateContext } from "../utils/gameReducer"
import HomeScreenOff from "../components/home-screens/HomeScreenOff"

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

export default function Home({ data }) {
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
                <HomeScreenOne data={data} setPagination={setPagination} />
              ) : pagination === 1 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title={data?.introduction?.intro1_title}
                  image={`${process.env.REACT_APP_IMAGES_URL}/${data?.introduction?.intro1_desktop_image?.name}`}
                  copy={data?.introduction?.intro1_text}
                />
              ) : pagination === 2 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title={data?.introduction?.intro2_title}
                  image={`${process.env.REACT_APP_IMAGES_URL}/${data?.introduction?.intro2_desktop_image?.name}`}
                  copy={data?.introduction?.intro2_text}
                />
              ) : pagination === 3 ? (
                <HomeScreenGeneric
                  pagination={pagination}
                  setPagination={setPagination}
                  title={data?.introduction?.intro3_title}
                  image={`${process.env.REACT_APP_IMAGES_URL}/${data?.introduction?.intro3_desktop_image?.name}`}
                  copy={data?.introduction?.intro3_text}
                />
              ) : (
                <HomeScreenOne data={data} setPagination={setPagination} />
              )}
            </>
          ) : (
            <HomeScreenOff data={data} />
          )}
          {open === "on" && (
            <p className="terms">
              {data?.home?.terms_text}{" "}
              <a
                href={data?.home?.link}
                target="_blank"
                rel="noreferrer"
                className="terms"
              >
                {data?.home?.link_text}
              </a>
            </p>
          )}
        </FakePopup>
      </HomeStyles>
      {loading && <Loading />}
    </>
  )
}
