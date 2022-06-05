import * as fs from 'fs'; // going to create our own filesystem using tree data structure
import { exec } from 'child_process'; // going to use child_process to execute commands

// linked list since we don't know how many comments there will be
interface CommentDoublyLinkedList {
  comment: string;
  dateStampDiff?: number;
  previousComment?: CommentDoublyLinkedList;
  nextComment?: CommentDoublyLinkedList;
}

export class Comments implements CommentDoublyLinkedList {
  public comment: string;
  public dateStampDiff?: number;
  public previousComment?: CommentDoublyLinkedList;
  public nextComment?: CommentDoublyLinkedList;

  constructor(comment: string) {
    this.comment = comment;
  }

  diffTime(nextLineDate : Date, commentLineDate : Date) {
    // get date in seconds since epoch
    let nextLineDateInSeconds = nextLineDate.getTime() / 1000;
    let commentLineDateSeconds = commentLineDate.getTime() / 1000;

    // difference in seconds
    return Math.abs(nextLineDateInSeconds - commentLineDateSeconds);
  }

  gitBlame(filename: string, lineNumber: number) {
    let gitBlameCommand = `git blame ${filename}`;
    let result = exec(gitBlameCommand, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
      console.log(stdout);
    });
  }
}