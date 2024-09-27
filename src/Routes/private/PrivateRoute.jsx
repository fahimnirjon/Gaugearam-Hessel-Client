import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    <Audio
      height="90"
      width="80"
      radius="10"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
