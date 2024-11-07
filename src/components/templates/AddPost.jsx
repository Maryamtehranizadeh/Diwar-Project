import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { useState } from "react";
import styles from "./AddPost.module.css";
import { getCookie } from "../../utils/cookie";
import axios from "axios";
import toast from "react-hot-toast";

function AddPost() {
  const queryClient = useQueryClient();
  const [isSuccess, setIsSuccess] = useState(false);
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
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    console.log(formData);
    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setIsSuccess(true);
          toast.success(res.data.message);
          queryClient.invalidateQueries(["get-post-list"]);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsSuccess(false);
        toast.error("Something went wrong!");
      });
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>Place an add</h3>
      {isSuccess && <p>Your add is placed successfully!</p>}
      <label htmlFor="titile">Title</label>
      <input type="text" id="title" name="title" placeholder="Title" />

      <label htmlFor="content">Explanation</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">Price</label>
      <input type="number" id="amount" name="amount" placeholder="Price" />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" placeholder="City" />

      <label htmlFor="category">Category</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.icon}
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
