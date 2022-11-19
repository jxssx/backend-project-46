/* eslint-disable no-undef */
import diff from '../index.js';
import { readFile } from '../src/tools.js';

test('diff', () => {
  const stylishInJSON = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish');
  const stylishInYAML = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'stylish');
  expect(stylishInJSON).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));
  expect(stylishInYAML).toEqual(readFile(['__fixtures__/expectedStylish.txt'], 'utf8'));

  const plainInJSON = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain');
  const plainInYAML = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'plain');
  expect(plainInJSON).toEqual(readFile(['__fixtures__/expectedPlain.txt'], 'utf8'));
  expect(plainInYAML).toEqual(readFile(['__fixtures__/expectedPlain.txt'], 'utf8'));

  const jsonInJSON = diff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json');
  const jsonInYAML = diff('__fixtures__/file1.yml', '__fixtures__/file2.yaml', 'json');
  expect(jsonInJSON).toEqual(readFile(['__fixtures__/expectedJSON.txt'], 'utf8'));
  expect(jsonInYAML).toEqual(readFile(['__fixtures__/expectedJSON.txt'], 'utf8'));
});
