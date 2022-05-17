import fs from 'fs';

// run system shell command
let command = `git blame README.md`;
let result = exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(error);
    }
    console.log(stdout);
    }
);