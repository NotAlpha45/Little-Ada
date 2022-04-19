import React from "react";
import "./MergeSort.css";

const MergeSort = () => {
  return (
    <div>
      <title>Merge Sort</title>
      <section className="u-clearfix u-section-1" id="sec-587c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <span className="u-file-icon u-icon u-icon-1">
            <img src={require("./images/275127.png")} alt="" />
          </span>
          <span className="u-file-icon u-icon u-icon-2">
            <img src={require("./images/2751271.png")} alt="" />
          </span>
          <h1 className="u-align-center u-custom-font u-font-roboto-slab u-text u-text-default u-text-1">
            Merge Sort
          </h1>
          <span className="u-file-icon u-icon u-icon-3">
            <img src={require("./images/189665.png")} alt="" />
          </span>
          <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-2">
            About
          </h3>
          <p className="u-align-left u-text u-text-3">
            Merge sort, divides an array into smaller and smaller pieces. The
            small pieces are sorted by just a swpie. Then, the pieces are merged
            (Hence the name). The merge is a very straightforeward looping
            mechanism.
            <br />
            This&nbsp; sort works recursively, and is an instance of a divide
            and conquer algorithm
          </p>
          <img
            className="u-image u-image-default u-image-1"
            src={require("./images/MergeSort.png")}
            alt=""
            data-image-width={721}
            data-image-height={521}
          />
        </div>
      </section>
      <section className="u-clearfix u-section-2" id="sec-14d7">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div>
            <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-1">
              Complexity
            </h3>
            <span className="u-file-icon u-icon u-icon-1">
              <img src={require("./images/1066371.png")} alt="" />
            </span>
            <p className="u-align-left u-text u-text-2">
              <b>The time complexity :</b> O(nlog(n))
              <br />
              The dividing of an array sized n takes log(n) time, and the
              merging of two divided parts takes log(n) time.
            </p>
          </div>

          <div>
            <div>
              <span className="u-file-icon u-icon u-icon-3">
                <img src={require("./images/2793832.png")} alt="" />
              </span>
              <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-5">
                Visualization
              </h3>
              <p className="u-text u-text-6">
                Let's see how this sort looks like :
              </p>
            </div>
            <div className="container1" id="canvas_div_merge"></div>
          </div>

          <div>
            <span className="u-file-icon u-icon u-icon-2">
              <img src={require("./images/4257812.png")} alt="" />
            </span>
            <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">
              Algorithm
            </h3>
            <p className="u-text u-text-4">A simple algorithm in python :</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergeSort;
