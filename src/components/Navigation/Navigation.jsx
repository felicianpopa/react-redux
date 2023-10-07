import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/my-lists">My Lists</Link>
        </li>
        <li>
          <Link to="/list-from-recipe">List from recipe</Link>
        </li>
        <li>
          <Link to="/simple-list">Simple list</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
