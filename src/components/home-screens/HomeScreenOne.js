import React from "react"
import { useCookies } from "react-cookie"
import TriesLeft from "../TriesLeft"
import badge from "../../assets/pen-badge.png"
import emptyJar from "../../assets/empty-jar.png"
import { useGameDispatchContext } from "../../utils/gameReducer"

export default function HomeScreenOne({ data, setPagination }) {
  const [cookies, setCookies] = useCookies()
  const dispatch = useGameDispatchContext()

  function handleButtonClick() {
    setPagination(1)
    if (
      localStorage.getItem("music") === null ||
      localStorage.getItem("music") === "true"
    ) {
      dispatch({ type: "UPDATE_AUDIO", audio: true })
    }
  }

  return (
    <>
      {parseInt(cookies.playAttempts, 10) > 0 || !cookies.playAttempts ? (
        <>
          <img
            style={{ display: "block", width: "100%", objectFit: "cover" }}
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.home?.desktop_image?.name}`}
            alt="Penhaligon's"
          />
          <p>{data?.home?.text}</p>
          <button className="button" onClick={handleButtonClick}>
            {data?.home?.btn_text}
          </button>
        </>
      ) : (
        <>
          <h1>{data?.block?.keen_title}</h1>
          <img
            style={{ height: 180, margin: "0 auto 20px" }}
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.block?.keen_desktop_image?.name}`}
            alt={data?.block?.keen_title}
          />
          <p>{data?.block?.keen_text}</p>
          <a className="button" href="https://www.penhaligons.com">
            Continue Shopping
          </a>
        </>
      )}
      <TriesLeft />
    </>
  )
}
