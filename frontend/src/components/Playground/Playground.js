import React from "react";
import "./Code_playground.css";
import "../Resource/nicepage.css";

const Playground = () => {
  return (
    <div>
      <title>Code_playground</title>

      <section
        className="u-align-center u-clearfix u-image u-image-contain u-shading u-section-playground-1"
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
        </div>
      </section>
    </div>
  );
};

export default Playground;
