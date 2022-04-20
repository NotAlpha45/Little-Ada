import React from "react";
import "./QuickSort.css";
const QuickSort = () => {
  return (
    <div>
      <title>Quick Sort</title>
      <section className="u-clearfix u-section-1" id="sec-587c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <span className="u-file-icon u-icon u-icon-1">
            <img src={require("./images/1067357.png")} alt="" />
          </span>
          <span className="u-file-icon u-icon u-icon-2">
            <img src={require("./images/10673571.png")} alt="" />
          </span>
          <h1 className="u-align-center u-custom-font u-font-roboto-slab u-text u-text-default u-text-1">
            Quick Sort
          </h1>
          <span className="u-file-icon u-icon u-icon-3">
            <img src={require("./images/189665.png")} alt="" />
          </span>
          <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-2">
            About
          </h3>
          <p className="u-align-left u-text u-text-3">
            Quick sort, also divides the array into pieces. However, it divides
            the array based on a pivot element - an element that is placed in
            such a way that it's position would be the exact one in the sorted
            array. Ususally, the last element of an array is selected to be
            positioned as a pivot. During the positioning process, most of the
            other elements are more or less placed in an ascending (or
            descending) manner. This makes the marging and sorting in general
            musch faster, even in edge cases.&nbsp;
            <br />
            The merging is pretty straightforeward, taking all the pivots in
            each recursive process will give the sorted array.
            <br />
            Quick sort is also a divide and conquer algorithm like{" "}
            <a
              href="https://nicepage.com/website-mockup"
              className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
              target="_blank"
            >
              merge sort
            </a>
            . Take a look as how this pivoting works :
          </p>
          <img
            className="u-image u-image-default u-image-1"
            src={require("./images/quicksort.jpg")}
            alt=""
            data-image-width={564}
            data-image-height={717}
          />
        </div>
      </section>
      <section className="u-clearfix u-section-2" id="sec-14d7">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h3 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-1">
            Complexity
          </h3>
          <span className="u-file-icon u-icon u-icon-1">
            <img src={require("./images/1066371.png")} alt="" />
          </span>
          <p className="u-align-left u-text u-text-2">
            <b>The time complexity :</b> O(nlog(n)) in average case.
            <br />
            The dividing of an array sized n takes log(n) time, and the pivot
            calculation takes n time.
          </p>

          <div>
            <span className="u-file-icon u-icon u-icon-2">
              <img src={require("./images/2793832.png")} alt="" />
            </span>
            <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">
              Visualization
            </h3>
            <p className="u-text u-text-4">
              {" "}
              Let's see how this sort looks like&nbsp;:
            </p>
            
          </div>
          <div style={{justifyContent: 'center', alignItems:"center"}}>
          <div className="container1" id="canvas_div_quick"></div>
          </div>
          <div>
            <span className="u-file-icon u-icon u-icon-3">
              <img src={require("./images/4257812.png")} alt="" />
            </span>
          </div>

          <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-5">
            Algorithm
          </h3>
          <p className="u-text u-text-6">A simple algorithm in python :</p>
          <div>
            <iframe
              src="https://www.jdoodle.com/embed/v0/4IHV"
              title="Code Simulator"
              width="100%"
              height="550"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickSort;
