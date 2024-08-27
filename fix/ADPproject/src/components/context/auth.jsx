import React, { createContext, useState, useContext } from 'react';

// Define the context and its default values
const AuthContext = createContext({
  token: null,
  role: null, // Add role to context
  setToken: () => {},
  setRole: () => {},
});

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null); // Add role state

  return (
    <AuthContext.Provider value={{ token, role, setToken, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};