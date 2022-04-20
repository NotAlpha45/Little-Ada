// Retrieve Elements
const consoleLogList = document.querySelector(".editor__console-logs");
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");

// Setup Ace
let codeEditor = ace.edit("editorCode", {
  mode: "ace/mode/java",
});
let defaultCode = "";
let consoleMessages = [];

let editorLib = {
  clearConsoleScreen() {
    consoleMessages.length = 0;

    // Remove all elements in the log list
    while (consoleLogList.firstChild) {
      consoleLogList.removeChild(consoleLogList.firstChild);
    }
  },
  printToConsole() {
    consoleMessages.forEach((log) => {
      const newLogItem = document.createElement("li");
      const newLogText = document.createElement("pre");

      newLogText.className = log.class;
      newLogText.textContent = `> ${log.message}`;

      newLogItem.appendChild(newLogText);

      consoleLogList.appendChild(newLogItem);
    });
  },
  init() {
    // Configure Ace

    // Theme
    codeEditor.setTheme("ace/theme/monokai");

    // Set language
    // codeEditor.session.setMode("ace/mode/python");

    // Set Options
    codeEditor.setOptions({
      fontFamily: "Inconsolata",
      fontSize: "14pt",
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set Default Code
    codeEditor.setValue(defaultCode);
  },
};

// Events
executeCodeBtn.addEventListener("click", () => {
  // Clear console messages
  editorLib.clearConsoleScreen();

  // Get input from the code editor
  const userCode = codeEditor.getValue();

  // Run the user code
  try {
    new Function(userCode)();
  } catch (err) {
    console.error(err);
  }

  // Print to the console
  editorLib.printToConsole();
});

resetCodeBtn.addEventListener("click", () => {
  // Clear ace editor
  codeEditor.setValue(defaultCode);

  // Clear console messages
  editorLib.clearConsoleScreen();
});

editorLib.init();
