import React from "react"
import TriesLeft from "../TriesLeft"
import badge from "../../assets/pen-badge.png"

export default function HomeScreenOne({ setPagination }) {
  return (
    <>
      <img
        style={{ display: "block", width: "100%", objectFit: "cover" }}
        src={badge}
        alt="Penhaligon's"
      />
      <p>
        The nasal confectioner gets terribly cheeky this time of year. He’s
        hidden some sweets around the factory and we need your help locating
        them.
      </p>
      <button className="button" onClick={() => setPagination(1)}>
        Get Searching
      </button>
      <TriesLeft />
    </>
  )
}
