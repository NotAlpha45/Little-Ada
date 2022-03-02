import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/SinglePost">
              Graph
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/SinglePost">
              Tree
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/SinglePost" className="link">
            Depth First Search
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
      </p>
    </div>
  );
}
