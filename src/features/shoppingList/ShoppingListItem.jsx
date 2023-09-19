import { useDispatch } from "react-redux";
import { toggleChecked } from "./shoppingListSlice";

const ShoppingListItem = ({ itemName, qty, checked, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`shopping-list-item ${checked ? "checked" : ""}`}
      onDoubleClick={() => dispatch(toggleChecked({ id }))}
    >
      <span>{itemName}</span>
      <span>{qty}</span>
    </div>
  );
};

export default ShoppingListItem;
