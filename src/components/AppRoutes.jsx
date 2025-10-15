import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage loading={loading} />}>
        {/* <Route path="/card/add" element={<NewCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage />} /> */}
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
