import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Suggestions = () => {
  const isMounted = useRef(false);
  const { suggestionsText, suggestionsData } = useSelector(
    (store) => store.suggestions
  );
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.warn("suggestions component", suggestionsText);
  }, [suggestionsText]);
  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <p>{suggestionsText}</p>
    </div>
  );
};

export default Suggestions;
