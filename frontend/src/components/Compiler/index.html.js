module.exports = `
<!DOCTYPE html>
<html lang="en">

<head>
    <title>MDN Code Editor</title>
</head>

<body>
    <div class="editor">
        <div class="editor__wrapper">
            <div class="editor__body">
                <div id="editorCode" class="editor__code"></div>
            </div>
            <div class="editor__footer">
                <div class="editor__footer--left">
                    <button class="editor__btn editor__run">Run ></button>
                    <button class="editor__btn editor__reset">Reset ></button>
                </div>
                <div class="editor__footer--right">
                    <div class="editor__console">
                        <ul class="editor__console-logs"></ul>
                        <pre id="output_section"></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`