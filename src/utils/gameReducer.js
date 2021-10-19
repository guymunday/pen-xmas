import React from "react"
import { createContext, useReducer, useContext } from "react"

let initialGameContext = {
  audio: false,
  id: "",
  score: 0,
  prize: "",
  previous: "",
  tries: 3,
  open: "on",
}

const GameStateContext = createContext(initialGameContext)
const GameDispatchContext = createContext()

const gameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_AUDIO": {
      return {
        ...state,
        audio: action.audio,
      }
    }
    case "UPDATE_ID": {
      return {
        ...state,
        id: action.id,
      }
    }
    case "UPDATE_OPEN": {
      return {
        ...state,
        open: action.open,
      }
    }
    case "UPDATE_SCORE": {
      return {
        ...state,
        score: action.score,
      }
    }
    case "UPDATE_PRIZE": {
      return {
        ...state,
        prize: action.prize,
      }
    }
    case "UPDATE_PREVIOUS_PRIZE": {
      return {
        ...state,
        previous: action.previous,
      }
    }
    case "UPDATE_TRIES": {
      return {
        ...state,
        tries: action.tries,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameContext)

  return (
    <GameDispatchContext.Provider value={dispatch}>
      <GameStateContext.Provider value={state}>
        {children}
      </GameStateContext.Provider>
    </GameDispatchContext.Provider>
  )
}

export const useGameStateContext = () => useContext(GameStateContext)
export const useGameDispatchContext = () => useContext(GameDispatchContext)
