import { useDispatch } from "react-redux";
import { updateItem } from "../../features/shoppingList/shoppingListSlice";
import { updateSuggestions } from "../Suggestions/suggestionsSlice";
import Suggestions from "../Suggestions/Suggestions";

const AddItem = ({ listId, currentList }) => {
  const uid = function () {
    return new Date().getTime();
  };
  const dispatch = useDispatch();
  const newItem = {
    id: uid(),
    itemName: "",
    qty: "",
    checked: false,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newListData = { ...newItem, ...Object.fromEntries(formData) };
    const updatedListData = { ...currentList };
    updatedListData.listData = [newListData, ...updatedListData.listData];
    dispatch(updateItem({ updatedListData, listId }));
    // Empty the values
    e.currentTarget.reset();
  };

  const setSearchText = (text) => {
    dispatch(updateSuggestions(text));
  };

  return (
    <>
      <h2>Add a new item to the shopping list: </h2>
      <form action="" className="shadow-box" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="itemName">Name:</label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            autoComplete="off"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Suggestions />
        </fieldset>
        <fieldset>
          <label htmlFor="qty">Quantity:</label>
          <input type="number" name="qty" />
        </fieldset>
        <button type="submit" className="btn">
          Add item
        </button>
      </form>
    </>
  );
};

export default AddItem;
