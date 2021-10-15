import React from "react"

export default function ContinueShoppingButton({ children, ...rest }) {
  return (
    <>
      <a href="https://www.penhaligons.com" className="button" {...rest}>
        {children}
      </a>
    </>
  )
}
