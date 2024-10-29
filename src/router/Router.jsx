import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../../src/pages/Dashboard";
import NotFound from "../../src/pages/NotFound";
import Homepage from "../../src/pages/Homepage";
import Admin from "../../src/pages/Admin";
import Auth from "../../src/pages/Auth";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Router() {
  console.log("heyyy");
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading, error });
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} replace />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
