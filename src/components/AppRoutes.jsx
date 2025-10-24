import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { NewCardPage } from "../pages/NewCard";
import { NotFoundPage } from "../pages/NotFound/NotFound";
import { CardPage } from "../pages/Card";
import { ExitPage } from "../pages/Exit";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />} >
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/card-add" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/exit" element={<ExitPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>} />
      <Route path="/register" element={<RegisterPage setIsAuth={setIsAuth}/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
