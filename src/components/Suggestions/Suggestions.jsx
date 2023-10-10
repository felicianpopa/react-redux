import { useEffect, useState } from "react";
const Suggestions = ({ url, suggestionsText, suggestionsLength }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    const response = await fetch(
      `${url}&query=${suggestionsText}&number=${suggestionsLength}`
    );
    const data = await response.json();
    setSuggestions(data.results);
  };

  // Update the suggestions
  useEffect(() => {
    if (suggestionsText.length > 2) {
      getSuggestions();
    }
  }, [suggestionsText]);
  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul className="suggestions">
        {suggestions.map(({ title, id }) => {
          return (
            <li
              key={id}
              onClick={() => {
                handleSuggestionClick(id);
              }}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
