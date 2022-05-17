"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process"); // going to use child_process to execute commands
// run system shell command
var command = "git blame README.md";
var result = (0, child_process_1.exec)(command, function (error, stdout, stderr) {
    if (error) {
        console.log(error);
    }
    console.log(getDateStamp(stdout));
});
// get datestamp for line
function getDateStamp(line) {
    var dateStamp = line.substring(0, line.indexOf(' '));
    return dateStamp;
}
