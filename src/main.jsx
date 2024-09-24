import React, { createContext, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({ isAuthenticated: false})

const AppWrapper = () => {
  const [user, setUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return(
    <Context.Provider value={{ isAuthenticated, user, setUser, setIsAuthenticated }}>
      <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
