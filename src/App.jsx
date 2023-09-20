import { Suspense, lazy } from "react";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
const ShoppingList = lazy(() =>
  import("./components/ShoppingList/ShoppingList")
);
function App() {
  return (
    <>
      <h1>Shopping list component</h1>
      <AddItem />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ShoppingList />
      </Suspense>
    </>
  );
}

export default App;
