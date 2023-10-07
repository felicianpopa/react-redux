import { Suspense, lazy } from "react";
import AddItem from "./../components/AddItem/AddItem";
const ShoppingList = lazy(() =>
  import("./../components/ShoppingList/ShoppingList")
);
const SimpleList = () => {
  return (
    <>
      <h2>Simple list</h2>
      <AddItem />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ShoppingList />
      </Suspense>
    </>
  );
};

export default SimpleList;
