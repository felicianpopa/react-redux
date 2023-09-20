import { useDispatch } from "react-redux";
import { addItem } from "../../features/shoppingList/shoppingListSlice";

const AddItem = () => {
  const dispatch = useDispatch();
  const newItem = {
    itemName: "",
    qty: "",
    checked: false,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedItem = { ...newItem, ...Object.fromEntries(formData) };

    dispatch(addItem(updatedItem));
    // Empty the values
    e.currentTarget.reset();
  };

  return (
    <>
      <h2>Add a new item to the shopping list: </h2>
      <form action="" className="shadow-box" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="itemName">Name:</label>
          <input type="text" name="itemName" id="itemName" />
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
