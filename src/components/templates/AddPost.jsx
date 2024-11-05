import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { useState } from "react";
import styles from "./AddPost.module.css";

function AddPost() {
  const { data } = useQuery(["get-categories"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    city: "",
    category: "",
    amount: null,
    images: null,
  });
  const changeHandler = (event) => {
    if (event.target.name !== "images") {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>Place an add</h3>
      <label htmlFor="titile">Title</label>
      <input type="text" id="title" name="title" placeholder="Title" />

      <label htmlFor="content">Explanation</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">Price</label>
      <input type="text" id="amount" name="amount" placeholder="Price" />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" placeholder="City" />

      <label htmlFor="category">Category</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <label htmlFor="images">Photo</label>
      <input type="file" id="images" name="images" />
      <button onClick={addHandler}>Create Add</button>
    </form>
  );
}

export default AddPost;
