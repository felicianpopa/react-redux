import { useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddItem from "./../components/AddItem/AddItem";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Suggestions from "../components/Suggestions/Suggestions";
const CurrentList = () => {
  let [searchParams] = useSearchParams();
  const listId = searchParams.get("id");
  const currentList = useSelector((store) => store.shopping.currentList);

  const url = "https://api.spoonacular.com/recipes";
  const [suggestionsText, setSuggestionsText] = useState("");
  return (
    <>
      <h1>{currentList.listName}</h1>
      <div>
        Search for a recipe:
        <input
          type="text"
          autoComplete="off"
          onChange={(e) => {
            setSuggestionsText(e.target.value);
          }}
        />
        <Suggestions
          apiKey="d0f40009910e48c8aad529f74ed12128"
          url={url}
          suggestionsText={suggestionsText}
          suggestionsLength="4"
        />
      </div>
      <div className="container small-container">
        <ShoppingList listId={listId} />
        <AddItem listId={listId} currentList={currentList} />
      </div>
    </>
  );
};

export default CurrentList;
