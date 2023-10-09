import { getCurrentList } from "../../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  let [searchParams] = useSearchParams();
  const listId = searchParams.get("id");
  const { currentList, isLoading } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentList(listId));
  }, []);
  return (
    <div>
      <h2>Shopping list items:</h2>
      <div className="shadow-box">
        {isLoading ? (
          <h2>Loading ...</h2>
        ) : (
          <>
            <ul className="shopping-list">
              {currentList.listData.map((listItem) => {
                const { id } = listItem;
                return (
                  <li key={id}>
                    <ShoppingListItem {...listItem} />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
