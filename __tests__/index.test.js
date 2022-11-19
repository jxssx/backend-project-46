/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const stylishJSON = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish');
  const stylishYAML = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'stylish');
  expect(stylishJSON).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));
  expect(stylishYAML).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));

  const plainJSON = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain');
  const plainYAML = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'plain');
  expect(plainJSON).toEqual(readFile(['__fixtures__/expectedPlain.txt'], 'utf8'));
  expect(plainYAML).toEqual(readFile(['__fixtures__/expectedPlain.txt'], 'utf8'));
});
