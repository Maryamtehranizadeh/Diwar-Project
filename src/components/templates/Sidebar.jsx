import { getCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import styles from "./Sidebar.module.css";
import { getPosts } from "../../services/user";
import { useState } from "react";
import { formatPrice } from "../../utils/price";

function Sidebar() {
  const [jsx, setJsx] = useState(null);
  const { isLoading, data } = useQuery(["get-categories"], getCategory);
  const response = useQuery(["get-post-list"], getPosts);
  //   console.log(response?.data?.data.posts);

  const categoryHandler = (icon) => {
    const chooseCategory = data?.data.find(
      (category) => category.icon === icon
    );
    // console.log(chooseCategory._id);
    const postsOfCategory = response?.data?.data.posts.filter(
      (post) => post.category === chooseCategory._id
    );
    console.log(postsOfCategory);
    setJsx(
      postsOfCategory.map((post) => (
        <div key={post._id} className={styles.list}>
          <img
            style={{ height: "70px", width: "70px" }}
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
          />
          <p>{post.options.title}</p>
          <p>{new Date(post.createdAt).toLocaleDateString("PT")}</p>
          <p>{formatPrice(post.amount)}€</p>
        </div>
      ))
    );
  };

  //   console.log(data?.data);
  return (
    <>
      <div className={styles.sidebar}>
        <h4>Categories</h4>
        <ul>
          {data?.data.map((category) => (
            <li
              key={category._id}
              onClick={() => categoryHandler(category.icon)}
            >
              <img src={`${category.icon}.svg`} />
              <p>{category.icon}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.listContainer}>{jsx}</div>
    </>
  );
}

export default Sidebar;
