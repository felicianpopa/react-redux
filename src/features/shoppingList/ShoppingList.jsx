import { getShoppingList } from "./shoppingListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const shoppingList = useSelector((store) => store.shopping.shoppingList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingList());
  }, []);
  return (
    <div>
      <h2>Shopping list items:</h2>
      <ul>
        {shoppingList.map((listItem) => {
          const { id, itemName } = listItem;
          return (
            <li key={id}>
              <ShoppingListItem {...listItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
