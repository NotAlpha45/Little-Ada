import React from "react";
import Navbar from "./components/Navbar/navbar";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth from "./components/Auth/Auth";
import Home from "./components/Home2/Home2";
// import SignIn from "./components/Auth/SignIn";
import Topics from "./components/Topics/Topics";
import Playground from "./components/Playground/Playground";
// import Editor from "./components/Editor/Editor";
import Blog from "./components/Blog/Blog";
import Algorithm from "./components/Algorithm/Algorithm";
import BubbleSort from "./components/Algorithm/BubbleSort/BubbleSort";

// Experimantal implementation of the login and signup

import SignUp from "./components/Singup/";
import Login from "./components/Login";

const App = () => {
  // const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          {/* What component to render when a certain path is found */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/topics" element={<Topics />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/bubble_sort" element={<BubbleSort />} />

          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
          {/* <Route path="/editor" element={<Editor />} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
