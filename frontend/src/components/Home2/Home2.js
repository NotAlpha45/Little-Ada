import React from "react";
import "./Home.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  // Tracks a change in which page currently is showing
  const location = useLocation();
  // User is fetched from the dispatched data we stored at the local storage
  // from the authReducer (reducers/auth.js)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // A log in effecter, what happens after log in.
  useEffect(() => {
    // If a token of a logged in user found
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <title>Home</title>

      <section
        className="skrollable u-clearfix u-image u-parallax u-shading u-section-home-1"
        id="sec-85c4"
        data-image-width={1280}
        data-image-height={853}
      >
        {/* <script>{console.log("ok")}</script> */}
        <div className="u-clearfix u-sheet u-sheet-1">
          <img
            className="u-align-center u-image u-image-1"
            src={require("./images/dfeda4bc7c069fe88e28ec94468cb9692f0f6b9bbd691940024c71f25b7fab56736e45213d2c8ffcb44576a649395099c9a7219db947e25a8bb934_1280.jpg")}
            data-image-width={1280}
            data-image-height={853}
          />
          <h3 className="u-align-center u-text u-text-grey-5 u-text-1">
            A Beginner's Guide To Coding
          </h3>
          <a
            href="/topics"
            className="u-active-palette-4-light-1 u-align-center u-btn u-btn-round u-button-style u-hover-palette-4-light-1 u-palette-1-base u-radius-50 u-text-active-palette-1-base u-text-body-alt-color u-text-hover-palette-1-base u-btn-1"
          >
            Explore
          </a>
          <p className="u-align-center u-text u-text-white u-text-2">
            <b>Explore The realm of coding with simplified concepts</b>
          </p>
        </div>
      </section>
      <section
        className="skrollable u-align-center u-clearfix u-image u-parallax u-shading u-valign-middle-sm u-valign-middle-xs u-section-home-2"
        id="carousel_328c"
        data-image-width={1280}
        data-image-height={688}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h4 className="u-text u-text-palette-1-light-2 u-text-1">Features</h4>
          <h1 className="u-text u-text-2">Visualize, Learn And Practice</h1>
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                  <img
                    src={require("./images/5c9fb44cbb5ac4ea75cab0522458a23b60395aa5fa5a7d7162634d14cc7c155859e8174bfc1ffe84e9c1d8a53d5966e18443f998bef2844205808c_1280.png")}
                    alt=""
                    className="u-hover-feature u-image u-image-round u-image-1"
                    data-image-width={1280}
                    data-image-height={868}
                    data-href="/algorithm"
                  />
                  <h4 className="u-text u-text-palette-1-base u-text-3">
                    Byte Sized Resources
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-5">
                    Quick and concise depiction of coding fundamentals.
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-video-cover u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                  <a href="/playground">
                    <img
                      src={require("./images/221508477-0.png")}
                      alt=""
                      className="u-hover-feature u-image u-image-round u-image-2"
                      data-image-width={1000}
                      data-image-height={1000}
                    />
                  </a>
                  <h4 className="u-text u-text-palette-1-base u-text-6">
                    Visualization
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-8">
                    {" "}
                    Line by line visualization of code along with fun
                    implications of algorithms.
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-video-cover u-white u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                  <img
                    src={require("./images/36726dc140cc49ef658c17c2a63ef6dd953d3c428f9a5e7681db8e71f8af6da0d2a9d08ead0617ea5489aade2a4272b796f464f875f9c19f7e62cb_1280.jpg")}
                    alt=""
                    className="u-hover-feature u-image u-image-contain u-image-round u-image-3"
                    data-image-width={900}
                    data-image-height={878}
                    data-href="/blog"
                  />
                  <h4 className="u-text u-text-palette-1-base u-text-9">
                    Read To Expand
                  </h4>
                  <h4 className="u-text u-text-palette-1-base u-text-10">
                    Read To Expand
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-11">
                    Explore various coding blogs written by expert users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="skrollable u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-image u-parallax u-shading u-section-home-3"
        id="sec-a2e8"
        data-image-width={150}
        data-image-height={99}
      >
        <h2 className="u-custom-font u-font-ubuntu u-text u-text-1">
          Code Editor
        </h2>
        <p className="u-align-left u-text u-text-white u-text-2">
          <b style={{}}>No hassle with installing, just click and go!</b>
        </p>
        <div className="u-expanded-width u-palette-1-dark-2 u-shape u-shape-rectangle u-shape-1" />
        <img
          className="u-hover-feature u-image u-image-default u-image-1"
          src={require("./images/oie_avk6ihOxZVhf.png")}
          alt=""
          data-image-width={1092}
          data-image-height={762}
          data-href="/editor"
        />
      </section>
    </div>
  );
};

export default Home;
