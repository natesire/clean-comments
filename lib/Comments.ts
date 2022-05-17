import * as fs from 'fs'; // going to create our own filesystem using tree data structure
import { exec } from 'child_process'; // going to use child_process to execute commands
import { parseIsolatedEntityName } from 'typescript';

interface Comment {
  line: string;
  dateStamp: Date;
}

export class Comments implements Comment {
  public line: string;
  public dateStamp: Date;

  constructor(commentText: string) {
    this.line = commentText;
  }

  gitBlame() {
    let command = `git blame README.md`;
    let result = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
      console.log(stdout);
    });
  }
}