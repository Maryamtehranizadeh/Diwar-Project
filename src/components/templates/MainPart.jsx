import { formatPrice } from "../../utils/price";

function MainPart({ data }) {
  console.log(data?.data.posts);

  return (
    <div>
      {data?.data.posts.map((post) => (
        <div key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div>
              <p>{formatPrice(post.amount)}€</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img
            style={{ height: "70px", width: "70px" }}
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
          />
        </div>
      ))}
    </div>
  );
}

export default MainPart;
