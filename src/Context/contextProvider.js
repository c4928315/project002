import { createContext, useState, useEffect } from "react";

const LocalContext = createContext({});

export const LocalProvider = ({ children }) => {
  // Load initial state from localStorage or use an empty object if not available
  const initialAuth = JSON.parse(localStorage.getItem("auth")) || {};

  const [auth, setAuth] = useState(initialAuth);

  // Update localStorage whenever auth changes
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  

  return (
    <LocalContext.Provider value={{ auth, setAuth }}>
      {children}
    </LocalContext.Provider>
  );
};

export default LocalContext;
