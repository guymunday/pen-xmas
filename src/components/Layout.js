import React from "react"
import Loading from "./Loading"

export default function Layout({ loading, children }) {
  return (
    <>{loading ? <Loading appLoading={true} /> : <main>{children}</main>}</>
  )
}
