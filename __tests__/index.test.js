/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const absPath = diff('/home/jxssx/backend-project-46/__fixtures__/file1.json', '/home/jxssx/backend-project-46/__fixtures__/file2.json');
  expect(absPath).toEqual(readFile('/home/jxssx/backend-project-46/__fixtures__/expected.txt'));

  const relPath = diff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(relPath).toEqual(readFile('/home/jxssx/backend-project-46/__fixtures__/expected.txt'));
});
