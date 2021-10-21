import React from "react"
import { useCookies } from "react-cookie"
import { useGameStateContext } from "../utils/gameReducer"

export default function AjaxButton({
  setFormSubmitted,
  prize,
  children,
  ...rest
}) {
  const formRef = React.useRef(null)
  const { score } = useGameStateContext()
  const [cookies, setCookies] = useCookies(["playAttempts"])

  function handleFormSubmit(e) {
    e.preventDefault()
    setFormSubmitted(true)

    setTimeout(() => {
      formRef.current.submit()
    }, 2000)
  }

  return (
    <>
      <form
        ref={formRef}
        action={process.env.REACT_APP_SUBMIT_URL}
        method="post"
        onSubmit={(e) => handleFormSubmit(e)}
        {...rest}
      >
        <input type="hidden" name="userScore" value={score} />
        <input
          type="hidden"
          name="userAttempts"
          value={parseInt(cookies.playAttempts, 10) + 1}
        />
        <input type="hidden" name="userPrize" value={prize} />
        <button type="submit" className="button">
          {children}
        </button>
      </form>
    </>
  )
}
