import React, { createContext, useState, useContext } from 'react';

// Define the context and its default values
const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
