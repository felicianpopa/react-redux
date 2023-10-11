import { useSelector } from "react-redux";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const { currentList, isLoading } = useSelector((store) => store.shopping);

  return (
    <div>
      <h2>Shopping list items:</h2>
      <div className="shadow-box">
        {isLoading ? (
          <h2>Loading ...</h2>
        ) : (
          <>
            <ul className="shopping-list">
              {currentList.listData.map((listItem) => {
                const { id } = listItem;
                return (
                  <li key={id}>
                    <ShoppingListItem {...listItem} />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
