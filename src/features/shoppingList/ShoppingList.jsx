import { getShoppingList } from "./shoppingListSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ShoppingList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingList());
  }, []);
  return (
    <div>
      <h1>Shopping list</h1>
    </div>
  );
};

export default ShoppingList;
