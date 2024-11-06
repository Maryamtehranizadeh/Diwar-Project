import React from "react";
import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function Dashboard() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
}

export default Dashboard;
