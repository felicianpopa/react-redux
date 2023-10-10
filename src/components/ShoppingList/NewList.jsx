import ShoppingList from "./ShoppingList";
import { useDispatch } from "react-redux";
import {
  setLoading,
  createShoppinglist,
} from "../../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
const NewList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  const handleCreateList = () => {
    dispatch(createShoppinglist());
  };
  return (
    <>
      <ShoppingList listId="newList" />
      <button
        onClick={() => {
          handleCreateList();
        }}
      >
        Create List
      </button>
    </>
  );
};

export default NewList;
