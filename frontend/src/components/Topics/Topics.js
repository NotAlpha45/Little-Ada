import React from "react";
import "./Topics.css";
import "../Resource/nicepage.css";

const Topics = () => {
  return (
    <div>
      <title>Topics</title>
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      />
      <link
        id="u-page-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900|Ubuntu:300,300i,400,400i,500,500i,700,700i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
      />

      <section
        className="u-align-center u-clearfix u-white u-section-1"
        id="carousel_b13d"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-center u-custom-font u-font-titillium-web u-text u-text-default u-text-1">
            Topics
          </h1>
          <p className="u-text u-text-2">Pick Up A Starting Point</p>
          <img
            alt=""
            className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-1"
            src={require("./images/ffff.jpg")}
            data-image-width={1200}
            data-image-height={800}
          />
          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-center u-container-style u-custom-color-4 u-custom-item u-hover-feature u-list-item u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <span className="u-file-icon u-icon u-icon-1">
                    <img src={require("./images/748607.png")} alt="" />
                  </span>
                  <h4 className="u-text u-text-3">
                    Binging&nbsp;
                    <br />
                    Basics
                  </h4>
                </div>
              </div>
              <div className="u-align-center u-container-style u-custom-color-6 u-custom-item u-hover-feature u-list-item u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <span className="u-file-icon u-icon u-icon-2">
                    <img src={require("./images/3618094.png")} alt="" />
                  </span>
                  <h4 className="u-text u-text-4">Adoring Algorithms</h4>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-custom-color-3 u-custom-item u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-3"
                data-href="#"
              >
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <span className="u-file-icon u-icon u-icon-3">
                    <img src={require("./images/1005141.png")} alt="" />
                  </span>
                  <h4 className="u-text u-text-5">
                    Code
                    <br />
                    Playground
                  </h4>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-grey-80 u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-4"
                data-href="#"
              >
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <span className="u-file-icon u-icon u-icon-4">
                    <img src={require("./images/6404558.png")} alt="" />
                  </span>
                  <h4 className="u-text u-text-6">
                    Code
                    <br />
                    Simulator
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topics;
