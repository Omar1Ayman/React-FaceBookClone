import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/REgister";
import ForgotPasswordPage from "./pages/forgotpasswordpage/ForgotPasswordPage";
import PageNotFound from "./pages/404/404";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="identify" element={<ForgotPasswordPage />} />
        <Route path="register" element={<Register />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
