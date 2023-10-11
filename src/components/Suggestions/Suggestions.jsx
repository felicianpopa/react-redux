const Suggestions = ({ suggestions, handleSuggestionClick }) => {
  return (
    <div className="suggestions">
      <ul>
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
