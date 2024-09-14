import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ProtectedRoute from "../components/auth/protectedRoute";
import CreateTarefa from "../pages/createTarefa/createTarefa";
import ListTarefa from "../pages/listTarefa/listTarefa";

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
          path="/createTarefa"
          element={
            <ProtectedRoute>
              <CreateTarefa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tarefas"
          element={
            <ProtectedRoute>
              <ListTarefa />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
