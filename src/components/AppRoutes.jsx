import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";

export function AppRoutes () {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
    
      return (
        <Routes>
          <Route path="/" element={<MainPage loading={loading} />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />}/>
        </Routes>
      )
}