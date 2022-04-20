import { Link } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css";
import { useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Table of Content</span>
        <ul className="sidebarList">
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
          
        </ul>
        <Link className="button" to="/write">Write</Link>
      </div>
      
    </div>
  );
}
