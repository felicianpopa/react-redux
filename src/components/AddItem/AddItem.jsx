import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../features/shoppingList/shoppingListSlice";
import SimpleSuggestions from "../Suggestions/SimpleSuggestions";

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

  const [searchText, setSearchText] = useState("");
  const [suggestionsText, setSuggestionsText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newListData = { ...newItem, ...Object.fromEntries(formData) };
    const updatedListData = { ...currentList };
    updatedListData.listData = [newListData, ...updatedListData.listData];
    dispatch(updateItem(updatedListData));
    // Empty the values
    e.currentTarget.reset();
    setSearchText("");
  };

  const handleChange = (text) => {
    setSearchText(text);
    setSuggestionsText(text);
  };

  const handleSuggestionClick = ({ title }) => {
    setSearchText(title);
    setSuggestionsText("");
  };

  return (
    <>
      <h2>Add a new item to the shopping list: </h2>
      <form action="" className="shadow-box" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="itemName">Name:</label>
          <div>
            <input
              type="text"
              name="itemName"
              id="itemName"
              autoComplete="off"
              value={searchText}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <SimpleSuggestions
              suggestionsText={suggestionsText}
              handleSuggestionClick={handleSuggestionClick}
            />
          </div>
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
