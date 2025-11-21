import { useCallback, useContext, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const [isDarkTheme, setIsDarkTheme] = useState(false);

    const {token} = useContext(AuthContext);

  const darkTheme = isDarkTheme;
  const websiteTheme = darkTheme === true ? "dark" : "light";

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
    <TaskContext.Provider
      value={{
        tasks,
        error,
        getTasks,
        isDarkTheme,
        setIsDarkTheme,
        websiteTheme,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
