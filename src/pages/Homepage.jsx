import React from "react";
import Sidebar from "../components/templates/Sidebar";
import MainPart from "../components/templates/MainPart";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/user";

function Homepage() {
  const { data, isLoading } = useQuery(["post-list"]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainPart />
    </div>
  );
}

export default Homepage;
