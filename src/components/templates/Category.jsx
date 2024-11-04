import React from "react";
import { useState } from "react";
import styles from "./Category.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";
function Category() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const queryClient = useQueryClient();
  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categories"]);
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    console.log(form);
    mutate(form);
    console.log({ isLoading, error, data });
    // console.log(data);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>Make a new Category</h3>
      {!!error && <p>{error.message}</p>}
      {data?.status === 201 && <p>Category is added successfuly</p>}
      <label htmlFor="name"></label>
      <input type="text" name="name" id="name" placeholder="name" />

      <label htmlFor="slug"></label>
      <input type="text" name="slug" id="slug" placeholder="slug" />

      <label htmlFor="icon"></label>
      <input type="text" name="icon" id="icon" placeholder="icon" />

      <button type="submit" disabled={isLoading}>
        Create Category
      </button>
    </form>
  );
}

export default Category;
