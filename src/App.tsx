import React, { useEffect, useState } from 'react'
import Router from 'Router'
import { fetchGraphData } from 'api/api'
import { AppContent } from 'shared-styles'
import GlobalStyles from 'styles/globalStyles'
import './App.css'

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
    <AppContent>
      <AppContext.Provider value={applicationData}>
        <GlobalStyles />
        <Router />
      </AppContext.Provider>
    </AppContent>
  )
}

export default App
