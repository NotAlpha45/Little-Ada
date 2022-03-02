import { useLocation } from "react-router";

import Posts from "../../components/Posts/Posts";
import "./Blog.css";

export default function Blog() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      
      <div className="blog">
        <Posts/> 
        
      </div>
    </>
  );
}
