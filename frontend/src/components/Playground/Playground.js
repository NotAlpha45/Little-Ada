import React from "react";
import "./Code_playground.css";
import "../Resource/nicepage.css";

const Playground = () => {
  return (
    <div>
      <title>Code_playground</title>

      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Code_playground" />
      <meta property="og:type" content="website" />

      <section
        className="u-align-center u-clearfix u-image u-image-contain u-shading u-section-playground-1"
        src=""
        data-image-width={1280}
        data-image-height={853}
        id="sec-5f2d"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-roboto-slab u-text u-text-default u-title u-text-1">
            Coding Playground
          </h1>
          <p className="u-large-text u-text u-text-variant u-text-2">
            Just Type and Run!
          </p>
          <div data-pym-src="https://www.jdoodle.com/embed/v0/4v3v"></div>
          <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js"></script>
        </div>
      </section>
    </div>
  );
};

export default Playground;
