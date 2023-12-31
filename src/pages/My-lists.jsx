import { getShoppingLists } from "../features/shoppingList/shoppingListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyLists = () => {
  const { shoppingLists, isLoading } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingLists());
  }, []);
  return (
    <>
      <h1>My lists</h1>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="small-container shadow-box">
          <ul className="my-lists">
            {shoppingLists.map((listItem) => {
              return (
                <li key={listItem.id}>
                  <Link to={`/current-list?id=${listItem.id}`}>
                    {listItem.listName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MyLists;
