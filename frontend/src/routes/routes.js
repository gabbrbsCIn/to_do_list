import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ListMembros from "../pages/listMembros/listMembros";
import ProtectedRoute from "../components/auth/protectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/membros"
          element={
            <ProtectedRoute>
              <ListMembros />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
