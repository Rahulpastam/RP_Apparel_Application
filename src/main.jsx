import React, { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [label, setLabel] = useState("");
  const [toke, setToke] = useState("")

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        setIsAuthenticated,
        label,
        setLabel,
        toke, 
        setToke
      }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
