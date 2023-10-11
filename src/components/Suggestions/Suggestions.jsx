const Suggestions = ({ suggestions, handleSuggestionClick }) => {
  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul className="suggestions">
        {suggestions.map(({ title, id }) => {
          return (
            <li
              key={id}
              onClick={() => {
                handleSuggestionClick({ id, title });
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
