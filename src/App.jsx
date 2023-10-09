import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyLists from "./pages/My-lists";
import ListFromRecipe from "./pages/List-from-recipe";
import SimpleList from "./pages/Simple-list";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/list-from-recipe" element={<ListFromRecipe />} />
          <Route path="/simple-list" element={<SimpleList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
