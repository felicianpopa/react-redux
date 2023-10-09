import { Suspense, lazy } from "react";
import AddItem from "./../components/AddItem/AddItem";
const ShoppingList = lazy(() =>
  import("./../components/ShoppingList/ShoppingList")
);
const SimpleList = () => {
  return (
    <>
      <h1>Simple list</h1>
      <div className="container small-container">
        <AddItem />
        <Suspense fallback={<h2>Loading...</h2>}>
          <ShoppingList />
        </Suspense>
      </div>
    </>
  );
};

export default SimpleList;
