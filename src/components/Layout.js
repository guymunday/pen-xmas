import React from "react"
import Loading from "./Loading"
import music from "../assets/music.mp3"

export default function Layout({ loading, children }) {
  return (
    <>
      {loading ? <Loading appLoading={true} /> : <main>{children}</main>}
      <audio id="music" src={music} loop />
    </>
  )
}
