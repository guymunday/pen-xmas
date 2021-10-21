import React from "react"
import Loading from "./Loading"
import { useGameStateContext } from "../utils/gameReducer"
import music from "../assets/music.mp3"

export default function Layout({ loading, children }) {
  const audioRef = React.useRef(null)
  const { audio } = useGameStateContext()

  React.useEffect(() => {
    if (audio) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [audio])

  return (
    <>
      {loading ? <Loading appLoading={true} /> : <main>{children}</main>}
      <audio ref={audioRef} src={music} loop />
    </>
  )
}
