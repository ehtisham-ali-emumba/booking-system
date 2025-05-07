import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If authentication check is done and user is not authenticated, redirect to login
    if (!loading && !isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, loading, navigate]);

  // Show nothing while authentication is being checked
  if (loading) {
    return <div style={{ margin: "20px" }}>Loading...</div>;
  }

  // If authenticated, render the children
  return isAuthenticated ? <>{children}</> : null;
};
