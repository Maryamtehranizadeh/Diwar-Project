import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import Loader from "../modules/Loader";
import { formatPrice } from "../../utils/price";

function PostList() {
  const { data, isLoading } = useQuery(["get-post-list"], getPosts);

  console.log(data?.data.posts);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.posts.map((post) => (
          <div key={post._id}>
            <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
            <div>
              <p>{post.options.title}</p>
              <span>{post.options.content}</span>
            </div>
            <div>
              <p>{new Date(post.createdAt).toLocaleDateString("PT")}</p>
              <span>{formatPrice(post.amount)}€</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
