import { Suspense, lazy } from "react";
import "./App.css";
const ShoppingList = lazy(() => import("./features/shoppingList/ShoppingList"));
function App() {
  return (
    <>
      <h1>Shopping list component</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ShoppingList />
      </Suspense>
    </>
  );
}

export default App;
