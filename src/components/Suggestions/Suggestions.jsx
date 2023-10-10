import { useEffect, useState } from "react";
const Suggestions = ({ url, suggestionsText }) => {
  const [suggestions, setSuggestions] = useState([]);
  const query = url + suggestionsText;
  const suggestionsLength = 4;
  const getSuggestions = async (query) => {
    const response = await fetch(
      `${url}&query=${suggestionsText}&number=${suggestionsLength}`
    );
    const data = await response.json();
    console.warn(data.results);
    setSuggestions(data.results);
  };
  useEffect(() => {
    if (suggestionsText.length > 2) {
      getSuggestions(query);
    }
  }, [suggestionsText]);
  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul className="suggestions">
        {suggestions.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
