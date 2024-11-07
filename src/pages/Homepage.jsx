import React from "react";
import Sidebar from "../components/templates/Sidebar";
import MainPart from "../components/templates/MainPart";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";

function Homepage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  // console.log({ data, isLoading });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <MainPart  data={data}/>
        </div>
      )}
    </>
  );
}

export default Homepage;
