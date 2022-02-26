import React from "react";
import "./Code_playground.css";
import "../Resource/nicepage.css";

const Playground = () => {
  return (
    <div>
      <title>Code Sandbox</title>

      <section
        className="u-align-center u-clearfix u-image u-image-contain u-shading u-section-playground-1"
        data-image-width={1280}
        data-image-height={853}
        id="sec-5f2d"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-roboto-slab u-text u-text-default u-title u-text-1">
            Code Sandbox
          </h1>
          <p className="u-large-text u-text u-text-variant u-text-2">
            Watch Your Code Unfold!
          </p>
          <div>
            <iframe
              src="https://pythontutor.com/visualize.html#mode=edit"
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

export default Playground;
