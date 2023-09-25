import { useDispatch } from "react-redux";
import { updateItem } from "../../features/shoppingList/shoppingListSlice";

const ShoppingListItem = ({ ...listItem }) => {
  const dispatch = useDispatch();

  const toggleChecked = (item) => {
    item.checked = item.checked ? false : true;
    dispatch(updateItem(item));
  };
  return (
    <div
      className={`shopping-list-item ${listItem.checked ? "checked" : ""}`}
      onDoubleClick={() => toggleChecked({ ...listItem })}
    >
      <span>{listItem.itemName}</span>
      <span>{listItem.qty}</span>
    </div>
  );
};

export default ShoppingListItem;
