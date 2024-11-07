import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/price";
import styles from "./MainPart.module.css";

function MainPart({ data }) {
  //   console.log(data?.data.posts);
  const navigate = useNavigate();
  const detailsHandler = (id) => {
    // console.log(id);
    navigate(`/post/${id}`);
  };

  return (
    <div className={styles.container}>
      {data?.data.posts.map((post) => (
        <div
          key={post._id}
          className={styles.card}
          onClick={() => detailsHandler(post._id)}
        >
          <div className={styles.info}>
            <p>{post.options.title}</p>
            <div>
              <p>{formatPrice(post.amount)}€</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
}

export default MainPart;
