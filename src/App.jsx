import { Suspense, lazy } from "react";
import "./App.css";
const ShoppingList = lazy(() => import("./features/shoppingList/ShoppingList"));
function App() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <ShoppingList />
      </Suspense>
      <h2>Shopping list footer</h2>
    </>
  );
}

export default App;
