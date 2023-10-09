import { getShoppingList } from "../../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const { shoppingList, isLoading } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingList());
  }, []);
  return (
    <div>
      <h2>Shopping list items:</h2>
      <div className="shadow-box">
        {isLoading ? (
          <h2>Loading ...</h2>
        ) : (
          <ul className="shopping-list">
            {shoppingList.map((listItem) => {
              const { id } = listItem;
              return (
                <li key={id}>
                  <ShoppingListItem {...listItem} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
