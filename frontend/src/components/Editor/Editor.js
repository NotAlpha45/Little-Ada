import React from "react";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";

const Editor = function () {
  const onSelectChange = function (selectedVal) {
    console.log(selectedVal);
    if (selectedVal != undefined && selectedVal != null && selectedVal != "") {
      $("button").off("click");
      codeEditor(selectedVal);
    }
  };

  window.onload = function () {
    codeEditor("53");
  };
  return (
    <div>
      <script src="texteditor.js"></script>
      <title>Code Editor</title>
      <style
        type="text/css"
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n      body {\n        overflow: hidden;\n      }\n\n      #editor {\n        min-width: 500px;\n        min-height: 500px;\n      }\n    ",
        }}
      />
      <div>
        <h1>Code Editor</h1>
        <select id="myselect" onChange={onSelectChange(this.value.trim())}>
          <option value={53}>C++</option>
          <option value={62}>Java</option>
          <option value={70}>Python</option>
        </select>
        <div id="editorContainer">
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
              <div className="col">
                <pre id="editor" />
              </div>
              <div className="col">
                <button className="btn btn-success">Execute</button>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <pre id="ans" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
