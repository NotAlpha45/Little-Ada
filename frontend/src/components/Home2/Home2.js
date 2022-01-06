import React from "react";
import "./Home.css";
import "./nicepage.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* Header section */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Easily Accessible &amp;amp; Secure, Data Visualization, High availability infrastructure, Hosting Datacenter"
        />
        <meta name="description" content="" />
        <meta
          name="page_type"
          content="np-template-header-footer-from-plugin"
        />

        <script
          class="u-script"
          type="text/babel"
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          defer=""
        ></script>
        <script
          class="u-script"
          type="text/babel"
          src="nicepage.js"
          defer=""
        ></script>
        <meta name="generator" content="Nicepage 4.2.6, nicepage.com" />
        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
        />
        <link
          id="u-page-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        />

        <meta name="theme-color" content="#478ac9" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
      </Helmet>

      <header className="u-clearfix u-header u-header" id="sec-ddba">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-palette-1-dark-1 u-text-1">
            &nbsp; <span className="u-icon u-icon-1"></span>Little
            Turing&nbsp;&nbsp;
            <span className="u-file-icon u-icon u-icon-2">
              <img src={require("./images/50245091.png")} alt="" />
            </span>
          </h1>
          <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div
              className="menu-collapse u-custom-font u-font-raleway"
              style={{
                fontSize: "1rem",
                letterSpacing: "0px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            ></div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-custom-font u-font-raleway u-nav u-spacing-30 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="#"
                    style={{ padding: "10px 28px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="#"
                    style={{ padding: "10px 28px" }}
                  >
                    Topics
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="#"
                    style={{ padding: "10px 28px" }}
                  >
                    Code Sandbox
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="#"
                    style={{ padding: "10px 28px" }}
                  >
                    About
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="/login"
                    style={{ padding: "10px 28px" }}
                  >
                    Log In
                  </a>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="#"
                        style={{ padding: "10px 28px" }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="#"
                        style={{ padding: "10px 28px" }}
                      >
                        Topics
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="#"
                        style={{ padding: "10px 28px" }}
                      >
                        Code Sandbox
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="#"
                        style={{ padding: "10px 28px" }}
                      >
                        About
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="/signIn"
                        style={{ padding: "10px 28px" }}
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
        </div>
      </header>

      <section
        className="skrollable u-clearfix u-image u-parallax u-shading u-section-1"
        id="sec-85c4"
        data-image-width="1280"
        data-image-height="853"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <img
            className="u-align-center u-image u-image-1"
            src={require("./images/dfeda4bc7c069fe88e28ec94468cb9692f0f6b9bbd691940024c71f25b7fab56736e45213d2c8ffcb44576a649395099c9a7219db947e25a8bb934_1280.jpg")}
            data-image-width="1280"
            data-image-height="853"
          />
          <h3 className="u-align-center u-text u-text-grey-5 u-text-1">
            A Beginner's Guide To Coding
          </h3>
          <a
            href="#"
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
        className="skrollable u-align-center u-clearfix u-image u-parallax u-shading u-valign-middle-sm u-valign-middle-xs u-section-2"
        id="carousel_328c"
        data-image-width="1280"
        data-image-height="688"
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
                    data-image-width="1280"
                    data-image-height="868"
                  />
                  <h4 className="u-text u-text-palette-1-base u-text-3">
                    Byte Sized Resources
                  </h4>
                  <h4 className="u-text u-text-palette-1-base u-text-4">
                    Byte Sized Resources
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-5">
                    Quick and concise depiction of coding fundamentals.
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-video-cover u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                  <img
                    src={require("./images/221508477-0.png")}
                    alt=""
                    className="u-hover-feature u-image u-image-round u-image-2"
                    data-image-width="1000"
                    data-image-height="1000"
                  />
                  <h4 className="u-text u-text-palette-1-base u-text-6">
                    Visualization
                  </h4>
                  <h4 className="u-text u-text-palette-1-base u-text-7">
                    Visualization
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-8">
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
                    data-image-width="900"
                    data-image-height="878"
                  />
                  <h4 className="u-text u-text-palette-1-base u-text-9">
                    Practice To Expand
                  </h4>
                  <h4 className="u-text u-text-palette-1-base u-text-10">
                    Practice To Expand
                  </h4>
                  <p className="u-text u-text-palette-1-base u-text-11">
                    Explore various problems to solidify knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="skrollable u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-image u-parallax u-shading u-section-3"
        id="sec-a2e8"
        data-image-width="150"
        data-image-height="99"
      >
        <h2 className="u-custom-font u-font-ubuntu u-text u-text-1">
          Code Playground
        </h2>
        <p className="u-align-left u-text u-text-white u-text-2">
          <b>No hassle with installing, just click and go!</b>
        </p>
        <div className="u-expanded-width u-palette-1-dark-2 u-shape u-shape-rectangle u-shape-1"></div>
        <img
          className="u-hover-feature u-image u-image-default u-image-1"
          src={require("./images/oie_avk6ihOxZVhf.png")}
          alt=""
          data-image-width="1092"
          data-image-height="762"
          data-href="#"
        />
      </section>

      <footer
        className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-ec9d"
      >
        <div className="u-align-left u-clearfix u-sheet u-sheet-1"></div>
      </footer>
    </div>
  );
};

export default Home;
