

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem("My-Chat"));
      if (!storedUser || !storedUser._id) return; 

      try {
        const res = await fetch(`https://my-chat-app-prod.onrender.com/api/users/${storedUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setAuthUser(data); 
        } else {
          console.error("Failed to fetch user:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
