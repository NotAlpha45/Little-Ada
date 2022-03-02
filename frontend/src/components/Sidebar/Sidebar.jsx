import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Table of Content</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Graph
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Dynamic Programming
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Tree
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Sort
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Data structure
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Recursion
            </Link>
          </li>
        </ul>
        <Link className="button" to="/write">Write</Link>
      </div>
      
    </div>
  );
}
