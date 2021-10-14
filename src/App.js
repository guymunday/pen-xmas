import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { useGameDispatchContext } from "./utils/gameReducer"
import Layout from "./components/Layout"

import Home from "./views/Home"
import Play from "./views/Play"

export default function App() {
  // const apiUrl = "https://play.penhaligons.com"
  const apiUrl = "https://penhaligons.wildishandco.co.uk"
  const dispatch = useGameDispatchContext()

  React.useEffect(() => {
    // dispatch({ type: "UPDATE_API_URL", url: apiUrl })
  }, [])

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  )
}
