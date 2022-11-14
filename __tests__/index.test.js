/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const actual = diff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(actual).toEqual(readFile(['__fixtures__/expected.txt'], 'utf8'));
});
