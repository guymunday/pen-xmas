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
      <div
        style={{
          width: "100%",
          minHeight: 290,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ display: "block", width: "100%", objectFit: "cover" }}
          src={image}
          alt="Penhaligon's"
        />
      </div>
      <p style={{ marginBottom: 75 }}>{copy}</p>
      <HomeScreenPagination
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  )
}
