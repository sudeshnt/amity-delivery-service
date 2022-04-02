import { fetchGraphData } from 'api/api'
import React, { useEffect, useState } from 'react'
import Router from 'Router'
import { uniq } from 'lodash'
import './App.css'

interface Route {
  id: number
  source: string
  destination: string
  const: number
}

const defaultContext = {
  towns: [],
  routes: {} as any,
}

export const AppContext = React.createContext(defaultContext)

const App = () => {
  const [applicationData, setApplicationData] = useState(defaultContext)

  useEffect(() => {
    fetchGraphData().then((data) => {
      const routes = data.routes
      const towns = Object.keys(routes)
      setApplicationData({
        towns,
        routes,
      } as any)
    })
  }, [])

  return (
    <AppContext.Provider value={applicationData}>
      <Router />
    </AppContext.Provider>
  )
}

export default App
