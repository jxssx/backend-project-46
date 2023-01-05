/* eslint-disable no-undef */

import diff from '../src/index.js';
import { readTestFile } from '../src/tools.js';

test('diff', () => {
  const stylishInJSON = diff('../__fixtures__/file1.json', '../__fixtures__/file2.json', 'stylish', test = true);
  const stylishInYAML = diff('../__fixtures__/file1.yml', '../__fixtures__/file2.yaml', 'stylish', test = true);
  expect(stylishInJSON).toEqual(readTestFile('../__fixtures__/expectedStylish.txt'));
  expect(stylishInYAML).toEqual(readTestFile('../__fixtures__/expectedStylish.txt'));

  const plainInJSON = diff('../__fixtures__/file1.json', '../__fixtures__/file2.json', 'plain', test = true);
  const plainInYAML = diff('../__fixtures__/file1.yml', '../__fixtures__/file2.yaml', 'plain', test = true);
  expect(plainInJSON).toEqual(readTestFile('../__fixtures__/expectedPlain.txt'));
  expect(plainInYAML).toEqual(readTestFile('../__fixtures__/expectedPlain.txt'));

  const jsonInJSON = diff('../__fixtures__/file1.json', '../__fixtures__/file2.json', 'json', test = true);
  const jsonInYAML = diff('../__fixtures__/file1.yml', '../__fixtures__/file2.yaml', 'json', test = true);
  expect(jsonInJSON).toEqual(readTestFile('../__fixtures__/expectedJSON.txt'));
  expect(jsonInYAML).toEqual(readTestFile('../__fixtures__/expectedJSON.txt'));
});
