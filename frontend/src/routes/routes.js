import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ProtectedRoute from "../components/auth/protectedRoute";
import CreateTarefa from "../pages/createTarefa/createTarefa";
import UpdateTarefa from "../pages/updateTarefa/updateTarefa";
import ListTarefa from "../pages/listTarefa/listTarefa";
import Sidebar from "../components/sidebar/sidebar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Sidebar />
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
              <Sidebar />
              <CreateTarefa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateTarefa/:id"
          element={
            <ProtectedRoute>
              <Sidebar />
              <UpdateTarefa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tarefas"
          element={
            <ProtectedRoute>
              <Sidebar />
              <ListTarefa />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
