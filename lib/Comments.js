import { exec } from 'child_process'; // going to use child_process to execute commands
export class Comments {
    constructor(commentText) {
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
