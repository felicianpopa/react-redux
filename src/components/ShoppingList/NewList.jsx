import ShoppingList from "./ShoppingList";
import AddItem from "../AddItem/AddItem";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
const NewList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  const currentList = useSelector((store) => store.shopping.currentList);
  return (
    <>
      <ShoppingList listId="newList" />
      <AddItem listId="newList" currentList={currentList} />
    </>
  );
};

export default NewList;
