import Suggestions from "./Suggestions";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../../features/suggestions/suggestionsSlice";
import { useState, useEffect } from "react";
const SimpleSuggestions = ({ suggestionsText, handleSuggestionClick }) => {
  const suggestions = useSelector((store) => store.suggestions.suggestionsData);
  const dispatch = useDispatch();
  const minSuggestionLength = 2;
  useEffect(() => {
    if (suggestionsText.length > minSuggestionLength) {
      dispatch(getSuggestions(suggestionsText));
    }
  }, [suggestionsText]);
  if (suggestions.length > 0 && suggestionsText.length > minSuggestionLength) {
    return (
      <Suggestions
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
    );
  }
};

export default SimpleSuggestions;
