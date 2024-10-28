import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../../src/pages/Dashboard";
import NotFound from "../../src/pages/NotFound";
import Homepage from "../../src/pages/Homepage";
import Admin from "../../src/pages/Admin";
import Auth from "../../src/pages/Auth";

function Router() {
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
