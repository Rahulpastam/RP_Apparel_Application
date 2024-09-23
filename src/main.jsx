import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({ isAuthenticated: false})

const AppWrapper = () => {
  const [user, setUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return(
    <Context.Provider value={{ isAuthenticated, user, setUser, setIsAuthenticated }}>
      <App />
    </Context.Provider>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
