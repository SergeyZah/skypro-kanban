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

  return (
    <Routes>
      <Route element={<PrivateRoute/>} >
        <Route path="/" element={<MainPage/>}>
          <Route path="/card-add6" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage/>} />
          <Route path="/exit" element={<ExitPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
