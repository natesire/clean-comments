"use strict";
exports.__esModule = true;
// run system shell command
var command = "git blame README.md";
var result = exec(command, function (error, stdout, stderr) {
    if (error) {
        console.log(error);
    }
    console.log(stdout);
});
