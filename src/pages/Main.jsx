import { useCallback, useEffect, useState } from "react";
import { Content } from "../components/Content";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../services/Api";

export const MainPage = ({ loading }) => {
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
    <>
      <div className="wrapper">
        <Loader loading={loading} />
        <Content token={token} tasks={tasks} loading={loading} error={error} />
        <Outlet />
      </div>
    </>
  );
};
