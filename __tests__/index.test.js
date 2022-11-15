/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const actual1 = diff('__fixtures__/file1.json', '__fixtures__/file2.json');
  expect(actual1).toEqual(readFile(['__fixtures__/expected.txt'], 'utf8'));

  const actual2 = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml');
  expect(actual2).toEqual(readFile(['__fixtures__/expected.txt'], 'utf8'));
});
