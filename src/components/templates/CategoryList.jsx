import { getCategory } from "../../services/admin";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import { deleteCategory } from "../../services/admin";

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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <p>
              <img src={`${i.icon}.svg`} />
            </p>
            <h4>{i.name}</h4>
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
