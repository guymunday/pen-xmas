import React from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { useGameDispatchContext } from "./utils/gameReducer"
import Layout from "./components/Layout"

import Home from "./views/Home"
import Play from "./views/Play"

export default function App() {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [data, setData] = React.useState({})
  const dispatch = useGameDispatchContext()

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/content`)
      .then((res) => {
        setData(res?.data?.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setError(true)
      })
  }, [])

  React.useEffect(() => {
    if (data && !loading) {
      dispatch({
        type: "UPDATE_TRIES",
        tries: parseInt(data?.settings?.total_tries, 10),
      })
      dispatch({ type: "UPDATE_OPEN", open: data?.block?.game_on })
    }
  }, [data, loading])

  return (
    <>
      <Router>
        <Layout loading={loading}>
          <Switch>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route path="/play">
              <Play data={data} />
            </Route>
            <Route>
              <Home data={data} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  )
}
