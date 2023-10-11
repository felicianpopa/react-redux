import { useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddItem from "./../components/AddItem/AddItem";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import RecipeSuggestions from "../components/Suggestions/RecipeSuggestions";
const CurrentList = () => {
  let [searchParams] = useSearchParams();
  const listId = searchParams.get("id");
  const currentList = useSelector((store) => store.shopping.currentList);

  const url = "https://api.spoonacular.com/recipes";
  const [suggestionsText, setSuggestionsText] = useState("");
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
};

export default CurrentList;
