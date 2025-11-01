import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";
import { FetchTaskContext } from "./FetchTaskContext";

export const FetchTaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

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

  const getTasks = useCallback(async () => {
    try {
      const data = await fetchTasks({
        token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [getTasks, token]);

  return (
      <FetchTaskContext.Provider value={{ tasks, error, token, getTasks }}>
         {children}
      </FetchTaskContext.Provider>
   );
};
