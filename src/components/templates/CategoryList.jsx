import { getCategory } from "../../services/admin";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import { deleteCategory } from "../../services/admin";
import styles from "./CategoryList.module.css";

function CategoryList() {
  const { isLoading, data } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });
  const queryClient = useQueryClient();
  const deleteMutation = useMutation((id) => deleteCategory(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categories"]);
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
        data.data.map((i) => (
          <div key={i._id} className={styles.category}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>{i.slug}</p>
            <button onClick={() => deleteHandler(i._id)}>
              Delete Category
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
