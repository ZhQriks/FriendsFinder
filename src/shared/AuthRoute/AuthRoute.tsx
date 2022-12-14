import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "../../hooks/useSelector";

export default function AuthRoute({ children }: any) {
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthorizedUser) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}
