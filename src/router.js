import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPages from "./pages/login";
import SignupPage from "./pages/signup";
import IndexPage from "./pages/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
