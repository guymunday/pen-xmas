import React from "react"
import HomeScreenPagination from "./HomeScreenPagination"

export default function HomeScreenGeneric({
  title,
  copy,
  image,
  pagination,
  setPagination,
}) {
  return (
    <>
      <h1>{title}</h1>
      <img
        style={{ display: "block", width: "100%", objectFit: "cover" }}
        src={image}
        alt="Penhaligon's"
      />
      <p style={{ marginBottom: 75 }}>{copy}</p>
      <HomeScreenPagination
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  )
}
