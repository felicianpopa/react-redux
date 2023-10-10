import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyLists from "./pages/My-lists";
import CurrentList from "./pages/Current-list";
import Navigation from "./components/Navigation/Navigation";
import CreateList from "./pages/Create-list";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/create-list" element={<CreateList />} />
          <Route path="/current-list" element={<CurrentList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
