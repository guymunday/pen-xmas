import React from "react"
import axios from "axios"
import { useCookies } from "react-cookie"
import { useGameStateContext } from "../utils/gameReducer"
import Popup from "./Popup"
import PrizeScreen from "./PrizeScreen"

export default function Prize({ data, startNewGame }) {
  const { id, prize, previous, score } = useGameStateContext()
  const [cookies, setCookies] = useCookies()

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/end`, { id, prize })
      .catch((error) => console.log(error))
  }, [])

  if (
    parseInt(cookies.playAttempts, 10) === 0 &&
    prize === "LOST" &&
    previous === "LOST"
  ) {
    return (
      <>
        <Popup>
          <PrizeScreen
            title={data?.notries?.title2}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.lost_desktop_image?.name}`}
            text={data?.notries?.text2}
            button={data?.result?.add_to_cart}
            lost
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
          />
        </Popup>
      </>
    )
  }

  if (
    parseInt(cookies.playAttempts, 10) === 0 &&
    prize === "LOST" &&
    previous !== "LOST"
  ) {
    return (
      <>
        <Popup>
          <PrizeScreen
            title={data?.notries?.title}
            image={
              previous === "BRONZE"
                ? `${process.env.REACT_APP_IMAGES_URL}/${data?.result?.bronze_desktop_image?.name}`
                : previous === "SILVER"
                ? `${process.env.REACT_APP_IMAGES_URL}/${data?.result?.silver_desktop_image?.name}`
                : previous === "GOLD"
                ? `${process.env.REACT_APP_IMAGES_URL}/${data?.result?.gold_desktop_image?.name}`
                : `${process.env.REACT_APP_IMAGES_URL}/${data?.result?.platinum_desktop_image?.name}`
            }
            text={data?.notries?.text}
            button={data?.result?.add_to_cart}
            prize={
              previous === "BRONZE"
                ? "PLAY4"
                : previous === "SILVER"
                ? "PLAY3"
                : previous === "GOLD"
                ? "PLAY2"
                : "PLAY1"
            }
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
            redirectMessage={data?.cart?.button_text}
            redirectTitle={data?.cart?.above_text}
          />
        </Popup>
      </>
    )
  }

  return (
    <>
      <Popup>
        {prize === "LOST" ? (
          <PrizeScreen
            title={data?.result?.lost_title}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.lost_desktop_image?.name}`}
            text={data?.result?.lost_text.replace("{score}", score)}
            button={data?.result?.add_to_cart}
            lost
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
          />
        ) : prize === "BRONZE" ? (
          <PrizeScreen
            title={data?.result?.bronze_title}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.bronze_desktop_image?.name}`}
            text={data?.result?.bronze_text.replace("{score}", score)}
            button={data?.result?.add_to_cart}
            prize="PLAY4"
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
            redirectMessage={data?.cart?.button_text}
            redirectTitle={data?.cart?.above_text}
          />
        ) : prize === "SILVER" ? (
          <PrizeScreen
            title={data?.result?.silver_title}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.silver_desktop_image?.name}`}
            text={data?.result?.silver_text.replace("{score}", score)}
            button={data?.result?.add_to_cart}
            prize="PLAY3"
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
            redirectMessage={data?.cart?.button_text}
            redirectTitle={data?.cart?.above_text}
          />
        ) : prize === "GOLD" ? (
          <PrizeScreen
            title={data?.result?.gold_title}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.gold_desktop_image?.name}`}
            text={data?.result?.gold_text.replace("{score}", score)}
            button={data?.result?.add_to_cart}
            prize="PLAY2"
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
            redirectMessage={data?.cart?.button_text}
            redirectTitle={data?.cart?.above_text}
          />
        ) : (
          <PrizeScreen
            title={data?.result?.platinum_title}
            image={`${process.env.REACT_APP_IMAGES_URL}/${data?.result?.platinum_desktop_image?.name}`}
            text={data?.result?.platinum_text.replace("{score}", score - 1)}
            button={data?.result?.add_to_cart}
            prize="PLAY1"
            playAgain={data?.result?.play_again}
            shopOn={data?.result?.shop_on}
            startNewGame={startNewGame}
            termsText={data?.home?.terms_text}
            termsLinkText={data?.home?.link_text}
            termsLink={data?.home?.link}
            redirectMessage={data?.cart?.button_text}
            redirectTitle={data?.cart?.above_text}
          />
        )}
      </Popup>
    </>
  )
}
