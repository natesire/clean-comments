import * as fs from 'fs'; // going to create our own filesystem using tree data structure
import { exec } from 'child_process'; // going to use child_process to execute commands

// run system shell command
let command = `git blame README.md`;
let result = exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(error);
    }
    console.log(getDateStamp(stdout));
    }
);

// get datestamp for line
function getDateStamp(line: string) {
    let dateStamp = line.substring(0, line.indexOf(' '));
    return dateStamp;
}

export class Comments {
    
}