import { useEffect, useState } from "react";
import { IngredientsResponse } from "../../data/suggestionsResponse";
import { updateItem } from "../../features/shoppingList/shoppingListSlice";
import { useDispatch, useSelector } from "react-redux";
import Suggestions from "./Suggestions";

const RecipeSuggestions = ({
  url,
  suggestionsText,
  suggestionsLength,
  apiKey,
}) => {
  const { currentList } = useSelector((store) => store.shopping);

  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);

  const getReipes = async () => {
    const response = await fetch(
      `${url}/complexSearch?apiKey=${apiKey}&query=${suggestionsText}&number=${suggestionsLength}`
    );
    const data = await response.json();
    setSuggestions(data.results);
  };

  const getRecipeIngredients = async (id) => {
    const response = await fetch(
      `${url}/${id}/information?apiKey=${apiKey}&includeNutrition=false`
    );
    const data = await response.json();
    const ingredients = IngredientsResponse.map(data);
    const updatedListData = {
      ...currentList,
      listData: [...currentList.listData, ...ingredients],
    };
    dispatch(updateItem(updatedListData));
  };

  // Update the suggestions
  useEffect(() => {
    if (suggestionsText.length > 2) {
      getReipes();
    }
  }, [suggestionsText]);

  const handleSuggestionClick = ({ id }) => {
    getRecipeIngredients(id);
  };

  return (
    <Suggestions
      suggestions={suggestions}
      handleSuggestionClick={handleSuggestionClick}
    />
  );
};

export default RecipeSuggestions;
