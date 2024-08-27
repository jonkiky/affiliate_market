// hooks/useAuth.js

import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication logic
    const token = localStorage.getItem('authToken'); // Example: Check for a token in localStorage
    setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  }, []);

  return { isAuthenticated };
}
