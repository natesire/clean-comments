"use strict";
exports.__esModule = true;
exports.Comments = void 0;
var child_process_1 = require("child_process"); // going to use child_process to execute commands
var Comments = /** @class */ (function () {
    function Comments(commentText) {
        this.line = commentText;
    }
    Comments.prototype.gitBlame = function () {
        var command = "git blame README.md";
        var result = (0, child_process_1.exec)(command, function (error, stdout, stderr) {
            if (error) {
                console.log(error);
            }
            console.log(stdout);
        });
    };
    return Comments;
}());
exports.Comments = Comments;
