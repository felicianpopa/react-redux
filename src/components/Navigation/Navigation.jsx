import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/my-lists">My Lists</Link>
        </li>
        <li>
          <Link to="/create-list">Create a new list</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
