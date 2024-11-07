import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../../src/pages/Dashboard";
import NotFound from "../../src/pages/NotFound";
import Homepage from "../../src/pages/Homepage";
import Admin from "../../src/pages/Admin";
import Auth from "../../src/pages/Auth";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import { Navigate } from "react-router-dom";
import Loader from "../components/modules/Loader";
function Router() {
  const { data, isLoading} = useQuery(["profile"], getProfile);
  // console.log({ data, isLoading, error });
  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} replace />
      <Route
        path="/dashboard"
        element={data ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <Auth />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
