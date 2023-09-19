import { getShoppingList } from "./shoppingListSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ShoppingList = () => {
  const shoppingList = useSelector((store) => store.shopping.shoppingList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingList());
  }, []);
  return (
    <div>
      <h1>Shopping list</h1>
      <ul>
        {shoppingList.map((listItem) => {
          const { id, itemName } = listItem;
          return <li key={id}>{itemName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
