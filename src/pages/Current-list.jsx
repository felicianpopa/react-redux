import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AddItem from "./../components/AddItem/AddItem";
import { Link } from "react-router-dom";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import { getCurrentList } from "../features/shoppingList/shoppingListSlice";
import RecipeSuggestions from "../components/Suggestions/RecipeSuggestions";
const CurrentList = () => {
  let [searchParams] = useSearchParams();
  const listId = searchParams.get("id");
  const currentList = useSelector((store) => store.shopping.currentList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentList(listId));
  }, []);

  const url = "https://api.spoonacular.com/recipes";
  const [suggestionsText, setSuggestionsText] = useState("");
  if (currentList === null) {
    return (
      <div className="error-message small-container">
        <h2>This item has no data</h2>
        <p>{`It is possible that the list with the id: ${listId} does not exist`}</p>
        <p>Please chech the console for additional information</p>
        <Link className="btn" to="/my-lists">
          Navigate to the lists page
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <h1>{currentList.listName}</h1>
        <div className="small-container">
          <div className="shadow-box">
            <h2>Search for a recipe:</h2>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) => {
                setSuggestionsText(e.target.value);
              }}
            />
            <RecipeSuggestions
              apiKey="d0f40009910e48c8aad529f74ed12128"
              url={url}
              suggestionsText={suggestionsText}
              suggestionsLength="4"
            />
          </div>
          <ShoppingList listId={listId} />
          <AddItem listId={listId} currentList={currentList} />
        </div>
      </>
    );
  }
};

export default CurrentList;
