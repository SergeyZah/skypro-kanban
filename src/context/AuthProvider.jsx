import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        if (parsedUserInfo.token) {
          setToken(parsedUserInfo.token);
        }
      } catch (e) {
        console.error("Ошибка парсинга userInfo:", e);
      }
    }
  }, []);

  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ token, isAuth, setIsAuth, loading }}>{children}</AuthContext.Provider>
  );
};
