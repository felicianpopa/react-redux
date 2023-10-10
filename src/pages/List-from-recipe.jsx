import NewList from "../components/ShoppingList/NewList";
import Suggestions from "../components/Suggestions/Suggestions";
import { useState } from "react";
const ListFromRecipe = () => {
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=d0f40009910e48c8aad529f74ed12128";
  const [suggestionsText, setSuggestionsText] = useState("");
  return (
    <>
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
          url={url}
          suggestionsText={suggestionsText}
          suggestionsLength="4"
        />
      </div>
      <NewList />
    </>
  );
};

export default ListFromRecipe;
