/* eslint-disable no-undef */
import diff from '../index.js';
import { formatPaths, readFile } from '../src/tools.js';

test('diff', () => {
  const actual = diff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(actual).toEqual(readFile(['/home/jxssx/backend-project-46/__fixtures__/expected.txt'], 'utf8'));
});
