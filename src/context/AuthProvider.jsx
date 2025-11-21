import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

      const storedUserInfo = localStorage.getItem("token");
  
  useEffect(() => {

    if (storedUserInfo) {
      try {
        const UserToken = JSON.parse(storedUserInfo);
        if (UserToken) {
          setToken(UserToken);
        }
      } catch (e) {
        console.error("Ошибка парсинга userInfo:", e);
      }
    }
  }, [storedUserInfo]);

  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ token, setToken, isAuth, setIsAuth, loading }}>{children}</AuthContext.Provider>
  );
};
