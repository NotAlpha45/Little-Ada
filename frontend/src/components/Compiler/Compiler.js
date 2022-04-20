import React from "react";
import "./compiler.css";
var __html = require('./index.html.js');
var template = { __html: __html };
const Compiler = () => {
  return (
    <div>
      <section
        className="u-clearfix u-grey-80 compiler-u-section-1"
        id="sec-d188"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-custom-font u-font-courier-new u-text u-text-default u-text-1">
            <b>Editor Off The Shelf</b>
          </h1>
          <h4 className="u-custom-font u-font-courier-new u-text u-text-default u-text-2">
            A python editor to jus​​t type and run!
          </h4>
        </div>
        <div>
        <span dangerouslySetInnerHTML={template} />
        </div>
        {/* <div>
          <div>
            <title>Python Editor</title>
            <div className="editor">
              <div className="editor__wrapper">
                <div className="editor__body">
                  <div id="editorCode" className="editor__code" />
                </div>
                <div className="editor__footer">
                  <div className="editor__footer--left">
                    <button className="editor__btn editor__run">
                      Run &gt;
                    </button>
                    <button className="editor__btn editor__reset">
                      Reset &gt;
                    </button>
                  </div>
                  <div className="editor__footer--right">
                    <div className="editor__console">
                      <ul class="editor__console-logs"></ul>
                      <pre id="output_section"></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Compiler;
