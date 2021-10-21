import React from "react"
import ContinueShoppingButton from "../ContinueShoppingButton"

export default function HomeScreenOff({ data }) {
  return (
    <>
      <h1> {data?.block?.factory_title}</h1>
      <img
        src={`${process.env.REACT_APP_IMAGES_URL}/${data?.block?.factory_desktop_image?.name}`}
        alt="lost"
        style={{ margin: "0 auto 20px", height: 180 }}
      />
      <ContinueShoppingButton>
        {data?.block?.factory_btn}
      </ContinueShoppingButton>
      <p>{data?.block?.factory_text}</p>
    </>
  )
}
