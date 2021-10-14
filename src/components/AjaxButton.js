import React from "react"

export default function AjaxButton({ children }) {
  function handleFormSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <button type="submit" className="button">
          {children}
        </button>
      </form>
    </>
  )
}
