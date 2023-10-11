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
  const [fetchError, setFetchError] = useState(false);
  const minSuggestionLength = 2;

  const getReipes = async () => {
    try {
      const response = await fetch(
        `${url}/complexSearch?apiKey=${apiKey}&query=${suggestionsText}&number=${suggestionsLength}`
      );
      const data = await response.json();
      setSuggestions(data.results);
    } catch (error) {
      console.error(error);
      setFetchError(true);
      setSuggestions([]);
    }
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
    if (suggestionsText.length > minSuggestionLength) {
      getReipes();
    }
  }, [suggestionsText]);

  const handleSuggestionClick = ({ id }) => {
    getRecipeIngredients(id);
  };
  if (fetchError && suggestionsText.length > minSuggestionLength) {
    return (
      <div className="error-message">
        <p>There was an error fetching the recipe list</p>
        <p>
          This is probably due to the limited number of requests. Please check
          the console for additional information
        </p>
      </div>
    );
  } else if (
    suggestions.length > 0 &&
    suggestionsText.length > minSuggestionLength
  ) {
    return (
      <Suggestions
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
    );
  }
};

export default RecipeSuggestions;
