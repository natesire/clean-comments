import fs from 'fs';

interface TreeNode {
  filesDirs: TreeNode[];
}

export class FilesDirs implements TreeNode {
  public filesDirs: TreeNode[];

  constructor(path: string) {
    this.filesDirs = this.readDir(path) as unknown as TreeNode[];

    //if file, leaf, read comments into hash table
  }

  readDir(path: string) : string[] {
    // read all directories in path
    let dirs = fs.readdirSync(path);
    return dirs;
  }

}