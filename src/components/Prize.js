import React from "react"
import axios from "axios"
import { useCookies } from "react-cookie"
import { useGameStateContext } from "../utils/gameReducer"
import AjaxButton from "./AjaxButton"
import Popup from "./Popup"
import TriesLeft from "./TriesLeft"
import ContinueShoppingButton from "./ContinueShoppingButton"

export default function Prize({ data, startNewGame }) {
  const { id, prize, previous, score } = useGameStateContext()
  const [cookies, setCookies] = useCookies()

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/end`, { id, prize })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => console.log(error))
  }, [])

  if (
    parseInt(cookies.playAttempts, 10) === 0 &&
    prize === "LOST" &&
    previous !== "LOST"
  )
    return (
      <>
        <Popup>
          <h1>{data?.notries?.title}</h1>
          {previous === "BRONZE" ? (
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.bronze_desktop_image?.name}`}
              alt="bronze"
              height="180"
            />
          ) : previous === "SILVER" ? (
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.silver_desktop_image?.name}`}
              alt="silver"
              height="180"
            />
          ) : previous === "GOLD" ? (
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.gold_desktop_image?.name}`}
              alt="gold"
              height="180"
            />
          ) : (
            <img
              src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.platinum_desktop_image?.name}`}
              alt="platinum"
              height="180"
            />
          )}
          <p>{data?.notries?.text}</p>
          <AjaxButton>{data?.result?.add_to_cart}</AjaxButton>
          <ContinueShoppingButton>
            {data?.notries?.btn_text}
          </ContinueShoppingButton>
          <TriesLeft />
          <p className="terms">
            {data?.home?.terms_text}{" "}
            <a
              href={data?.home?.link}
              target="_blank"
              rel="noopener"
              className="terms"
            >
              {data?.home?.link_text}
            </a>
          </p>
        </Popup>
      </>
    )

  return (
    <>
      <Popup>
        {prize === "LOST" ? (
          <h1>{data?.result?.lost_title}</h1>
        ) : prize === "BRONZE" ? (
          <h1>{data?.result?.bronze_title}</h1>
        ) : prize === "SILVER" ? (
          <h1>{data?.result?.silver_title}</h1>
        ) : prize === "GOLD" ? (
          <h1>{data?.result?.gold_title}</h1>
        ) : (
          <h1>{data?.result?.platinum_title}</h1>
        )}
        {prize === "LOST" ? (
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.lost_desktop_image?.name}`}
            alt="lost"
            height="180"
          />
        ) : prize === "BRONZE" ? (
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.bronze_desktop_image?.name}`}
            alt="bronze"
            height="180"
          />
        ) : prize === "SILVER" ? (
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.silver_desktop_image?.name}`}
            alt="silver"
            height="180"
          />
        ) : prize === "GOLD" ? (
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.gold_desktop_image?.name}`}
            alt="gold"
            height="180"
          />
        ) : (
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.platinum_desktop_image?.name}`}
            alt="platinum"
            height="180"
          />
        )}
        {prize === "LOST" && (
          <p>{data?.result?.lost_text.replace("{score}", score)}</p>
        )}
        {prize === "BRONZE" && (
          <p>{data?.result?.bronze_text.replace("{score}", score)}</p>
        )}
        {prize === "SILVER" && (
          <p>{data?.result?.silver_text.replace("{score}", score)}</p>
        )}
        {prize === "GOLD" && (
          <p>{data?.result?.gold_text.replace("{score}", score)}</p>
        )}
        {prize === "PLATINUM" && (
          <p>{data?.result?.platinum_text.replace("{score}", score - 1)}</p>
        )}
        {prize !== "LOST" && (
          <AjaxButton>{data?.result?.add_to_cart}</AjaxButton>
        )}
        {parseInt(cookies.playAttempts, 10) >= 1 ? (
          <button className="button" onClick={startNewGame}>
            {data?.result?.play_again}
          </button>
        ) : (
          <ContinueShoppingButton>
            {data?.result?.shop_on}
          </ContinueShoppingButton>
        )}
        <TriesLeft />
        <p className="terms">
          {data?.home?.terms_text}{" "}
          <a
            href={data?.home?.link}
            target="_blank"
            rel="noopener"
            className="terms"
          >
            {data?.home?.link_text}
          </a>
        </p>
      </Popup>
    </>
  )
}
