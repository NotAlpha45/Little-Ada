// Retrieve Elements
const consoleLogList = document.querySelector(".editor__console-logs");
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");

// Setup Ace
let editor_language = "python";
let codeEditor = ace.edit("editorCode");
codeEditor.getSession().setMode("ace/mode/" + editor_language);
codeEditor.getSession().setUseWorker(false);
codeEditor.setShowPrintMargin(false);
codeEditor.setBehavioursEnabled(true);
let defaultCode = "print(\"Hi mom\")";
let consoleMessages = [];

const BASE_URL = "https://ce.judge0.com/submissions";
const PYTHON_KEY = "70";

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

  let data = {
    source_code: userCode,
    language_id: PYTHON_KEY,
    number_of_runs: 1,
    stdin: "Judge0",
    expected_output: null,
    cpu_time_limit: 2,
    cpu_extra_time: 0.5,
    wall_time_limit: 5,
    memory_limit: 128000,
    stack_limit: 64000,
    max_processes_and_or_threads: 60,
    enable_per_process_and_thread_time_limit: false,
    enable_per_process_and_thread_memory_limit: false,
    max_file_size: 1024,
  };

  let request = $.ajax({
    url: BASE_URL,
    type: "post",
    data: data,
  });

  // Run the user code
  try {
    request.done(async function (response, textStatus, jqXHR) {
      let token = response.token;
      await new Promise((resolve) => setTimeout(resolve, 100)); // 3 sec

      let second_request = $.ajax({
        url: BASE_URL + "/" + token,
        type: "get",
      });
      second_request.done(function (response) {
        // console.log(typeof(response.stdout));
        // console.log(response.stdout.split("\n"));
        // let response_array = response.stdout.split("\n");
        // let code_output = '['
        // response_array.forEach(
        //   function(element){
        //     code_output = code_output + '\'' + element + '\'' + ','
        //   }
        // )
        // code_output = code_output + ']'
        // console.log(response_array);
        // console.log(code_output)

        // let compiled_code = `${code_output}.forEach(element => console.log(element));`;
        // console.log(compiled_code)
        // new Function(compiled_code)();
        
        $("#output_section").html(response.stdout);
      });
    });
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
