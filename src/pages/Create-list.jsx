import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLoading,
  createShoppinglist,
  resetNewListId,
} from "../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
const CreateList = () => {
  const { newListId } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(resetNewListId());
  }, []);
  useEffect(() => {
    if (newListId !== null) {
      navigate(`/current-list?id=${newListId}`);
      dispatch(resetNewListId());
    }
  }, [newListId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const { listName } = formData;
    dispatch(createShoppinglist(listName));
    // Empty the values
    e.currentTarget.reset();
  };
  return (
    <>
      <form
        action=""
        className="small-container shadow-box"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <label htmlFor="listName">List name:</label>
          <input type="text" name="listName" id="listName" autoComplete="off" />
        </fieldset>
        <button type="submit" className="btn">
          Create list
        </button>
      </form>
    </>
  );
};

export default CreateList;
