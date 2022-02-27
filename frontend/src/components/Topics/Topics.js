import React from "react";
import "./Topics.css";

const Topics = () => {
  return (
    <div>
      <title>Topics</title>

      <section
        className="u-align-center u-clearfix u-white u-section-topic-1"
        id="carousel_b13d"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-center u-custom-font u-font-titillium-web u-text u-text-default u-text-1">
            Topics
          </h1>
          <p className="u-text u-text-2">Pick Up A Stating Point</p>
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
                    Editor
                  </h4>
                </div>
              </div>
              <div
                className="u-align-center u-container-style u-grey-80 u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-4"
                data-href="/playground"
              >
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <span className="u-file-icon u-icon u-icon-4">
                    <img src={require("./images/6404558.png")} alt="" />
                  </span>
                  <h4 className="u-text u-text-6">
                    Code
                    <br />
                    Sandbox
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
