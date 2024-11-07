import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import Loader from "../modules/Loader";
import { formatPrice } from "../../utils/price";
import styles from "./PostList.module.css";
import { deletePost } from "../../services/user";

function PostList() {
  const { data, isLoading } = useQuery(["get-post-list"], getPosts);
  console.log(data?.data.posts);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation((id) => deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-post-list"]);
    },
  });

  const deleteHandler = (id) => {
    deleteMutation.mutate(id);
  };
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Your Adds</h3>
          {data.data.posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <p>{post.options.category}</p>
              <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("PT")}</p>
                <span>{formatPrice(post.amount)}€</span>
              </div>
              <button onClick={() => deleteHandler(post._id)}>
                Delete Add
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
