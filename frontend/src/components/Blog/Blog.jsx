import { useLocation } from "react-router";
import React, { useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Blog.css";
import { useState } from "react";
import axios from "axios";

export default function Blog() {
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <>
      
      <div className="blog">
        <Posts posts={posts}/> 
        <Sidebar/>
        
      </div>
    </>
  );
}
