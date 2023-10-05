import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getSuggestions } from "./suggestionsSlice";

const Suggestions = () => {
  const minSuggestionLength = 2;
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const { suggestionsText, suggestionsData } = useSelector(
    (store) => store.suggestions
  );
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (suggestionsText.length > minSuggestionLength) {
      dispatch(getSuggestions(suggestionsText));
    }
  }, [suggestionsText]);
  if (
    suggestionsData.length > 0 &&
    suggestionsText.length > minSuggestionLength
  ) {
    return (
      <div className="suggestions">
        <h2>Suggestions</h2>
        <ul className="suggestions">
          {suggestionsData.map((suggestion, id) => {
            return <li key={id}>{suggestion}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default Suggestions;
