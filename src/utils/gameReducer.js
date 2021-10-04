import React from "react"
import { createContext, useReducer, useContext } from "react"

let initialGameContext = {}

const GameStateContext = createContext(initialGameContext)
const GameDispatchContext = createContext()

const gameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ID": {
      return {
        ...state,
        id: action.id,
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
