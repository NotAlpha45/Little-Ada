import React from "react";
import "./BubbleSort.css";

const BubbleSort = () => {
  return (
    <div>
      <title>BubbleSort</title>

      <section className="u-clearfix u-section-BubbleSort-1" id="sec-587c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div>
            <span className="u-file-icon u-icon u-icon-1">
              <img src={require("./images/1326001.png")} alt="" />
            </span>
            <span className="u-file-icon u-icon u-icon-2">
              <img src={require("./images/1326001.png")} alt="" />
            </span>
            <h1 className="u-align-center u-custom-font u-font-roboto-slab u-text u-text-default u-text-1">
              Bubble Sort
            </h1>
          </div>

          <div>
            <div>
              <span className="u-file-icon u-icon u-icon-3">
                <img src={require("./images/189665.png")} alt="" />
              </span>
              <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-2">
                About
              </h3>
              <p className="u-align-left u-text u-text-default u-text-3">
                Bubble Sort is the simplest sorting algorithm that works by
                repeatedly swapping the adjacent elements if they are in wrong
                order. Just like the movement of air bubbles in the water that
                rise up to the surface, each element of the array move to the
                end in each iteration. Therefore, it is called a bubble sort.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-6">
                Visualization
              </h3>
              <span className="u-file-icon u-icon u-icon-5">
                <img src={require("./images/2793832.png")} alt="" />
              </span>
              <p className="u-align-left u-text u-text-default u-text-7">
                Let's take a look how this sorting works:
              </p>
            </div>
            <div>
              {/* <span dangerouslySetInnerHTML={template} /> */}
              <div className="container1" id="canvas_div"></div>
            </div>
          </div>

          <div>
            <div>
              <span className="u-file-icon u-icon u-icon-4">
                <img src={require("./images/4257812.png")} alt="" />
              </span>
              <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-4">
                Algorithm
              </h3>
              <p className="u-align-left u-text u-text-default u-text-5">
                A simple algorithm in python :
              </p>
            </div>
            <div>
              <iframe
                src="https://www.jdoodle.com/embed/v0/4vPs"
                title="Code Simulator"
                width="100%"
                height="550"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BubbleSort;
