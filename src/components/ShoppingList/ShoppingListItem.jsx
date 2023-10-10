import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../features/shoppingList/shoppingListSlice";

const ShoppingListItem = ({ ...listItem }) => {
  const { currentList } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();

  const toggleChecked = (itemData) => {
    const updatedItemsData = currentList.listData.map((item) => {
      if (item.id === itemData.id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    const updatedListData = { ...currentList, listData: updatedItemsData };
    dispatch(updateItem(updatedListData));
  };
  return (
    <div
      className={`shopping-list-item ${listItem.checked ? "checked" : ""}`}
      onDoubleClick={() => toggleChecked({ ...listItem })}
    >
      <span>{listItem.itemName}</span>
      <span>
        {listItem.qty}
        {listItem.unit}
      </span>
    </div>
  );
};

export default ShoppingListItem;
