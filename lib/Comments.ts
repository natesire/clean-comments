import * as fs from 'fs'; // going to create our own filesystem using tree data structure
import { exec } from 'child_process'; // going to use child_process to execute commands

// run system shell command

interface Comment {
  line: string;
  dateStamp: string;
}


export class Comments implements Comment {

  public line: string;
  public dateStamp: string;

  constructor(line: string) {
    this.line = line;
  }

  command() {
    let command = `git blame README.md`;
        let result = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
            }
     console.log(getDateStamp(stdout));
        }
    );
    }

    getDateStamp(line: string) {
        let dateStamp = line.substring(0, line.indexOf(' '));
        return dateStamp;
    }
    
}