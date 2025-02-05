import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute component to secure routes
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
