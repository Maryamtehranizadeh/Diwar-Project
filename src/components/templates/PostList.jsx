import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";

function PostList() {
  const { data, isLoading } = useQuery(["get-post-list"], getPosts);
  console.log(data?.data.posts);
  return <div>PostList</div>;
}

export default PostList;
