import React from "react"
import ContinueShoppingButton from "../ContinueShoppingButton"
import emptyJar from "../../assets/empty-jar.png"

export default function HomeScreenOff() {
  return (
    <>
      <h1>The factory is closed</h1>
      <img
        src={emptyJar}
        alt="lost"
        style={{ margin: "0 auto 20px", height: 180 }}
      />
      <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
      <p>
        The factory is closed and all the sweets have been found. No matter, you
        can still peruse an array of sweet-scented delights from Penhaligon’s.
      </p>
    </>
  )
}
