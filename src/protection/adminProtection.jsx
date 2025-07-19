import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtection({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  if (!token) {
    return <Navigate to="/unauth" replace />;
  }

  return children;
}
