import { useSelector } from "react-redux";
import AddItem from "./../components/AddItem/AddItem";
import ShoppingList from "../components/ShoppingList/ShoppingList";
const SimpleList = () => {
  return (
    <>
      <h1>Create a simple list</h1>
      <div className="container small-container">
        <ShoppingList />
        <AddItem />
      </div>
    </>
  );
};

export default SimpleList;