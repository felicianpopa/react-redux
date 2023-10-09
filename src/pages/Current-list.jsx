import { useSelector } from "react-redux";
import AddItem from "./../components/AddItem/AddItem";
import ShoppingList from "../components/ShoppingList/ShoppingList";
const CurrentList = () => {
  const currentList = useSelector((store) => store.shopping.currentList);
  return (
    <>
      <h1>{currentList.listName}</h1>
      <div className="container small-container">
        <ShoppingList />
        <AddItem />
      </div>
    </>
  );
};

export default CurrentList;
