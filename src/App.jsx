import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyLists from "./pages/My-lists";
import CurrentList from "./pages/Current-list";
import Navigation from "./components/Navigation/Navigation";
import CreateList from "./pages/Create-list";
import HomePage from "./pages/HomePage";
import CookBuddy from "./components/CookBuddy/CookBuddy";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/create-list" element={<CreateList />} />
          <Route path="/current-list" element={<CurrentList />} />
        </Routes>
        <CookBuddy />
      </div>
    </>
  );
}

export default App;
