import { useLocation } from "react-router";
import React from "react";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Blog.css";

export default function Blog() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      
      <div className="blog">
        <Posts/> 
        <Sidebar/>
        
      </div>
    </>
  );
}
