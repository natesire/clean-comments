import { FilesDirs } from '../FilesDirs';

describe('FilesDirs', () => {
  it('should be a path', () => {
    let filesDirs = new FilesDirs('./');
    expect(filesDirs).toBeInstanceOf(FilesDirs);
  });
});