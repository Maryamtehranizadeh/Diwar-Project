import { getAllPosts } from "../services/user";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../components/modules/Loader";
import { formatPrice } from "../utils/price";

function Details() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  //   console.log({ data, isLoading });
  console.log(data?.data.posts);

  const thisPost = data?.data.posts.find((post) => post._id === id);
  console.log(thisPost);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "40px",
            alignItems: "center",
            border: "2px solid #eaeaea",
            borderRadius: "20px",
            paddingTop: "70px",
            paddingBottom: "70px",
            color: "grey",
          }}
        >
          <img
            style={{ height: "400px", width: "400px" }}
            src={`${import.meta.env.VITE_BASE_URL}${thisPost.images[0]}`}
          />
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}
          >
            <h1 style={{ color: "tomato" }}>Name: {thisPost.options.title}</h1>
            <h3 style={{ borderBottom: "1px solid tomato" }}>More Details:</h3>
            <p>Explanation: {thisPost.options.content}</p>
            <h5>Price: {formatPrice(thisPost.amount)}€</h5>
            <h5>
              Post created at:{" "}
              {new Date(thisPost.createdAt).toLocaleDateString("PT")}
            </h5>
            <p>Location:{thisPost.options.city}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
