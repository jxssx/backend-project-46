/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const actual1 = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish');
  expect(actual1).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));

  const actual2 = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'stylish');
  expect(actual2).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));
});
