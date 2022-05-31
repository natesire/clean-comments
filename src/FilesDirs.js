import fs from 'fs';
export class FilesDirs {
    constructor(path) {
        this.filesDirs = this.readDir(path);
        //if file, leaf, read comments into hash table
    }
    readDir(path) {
        // read all directories in path
        let dirs = fs.readdirSync(path);
        return dirs;
    }
}
