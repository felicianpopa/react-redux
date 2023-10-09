import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AddItem from "./../components/AddItem/AddItem";
import ShoppingList from "../components/ShoppingList/ShoppingList";
const CurrentList = () => {
  let [searchParams] = useSearchParams();
  const listId = searchParams.get("id");
  const currentList = useSelector((store) => store.shopping.currentList);
  return (
    <>
      <h1>{currentList.listName}</h1>
      <div className="container small-container">
        <ShoppingList listId={listId} />
        <AddItem listId={listId} currentList={currentList} />
      </div>
    </>
  );
};

export default CurrentList;
