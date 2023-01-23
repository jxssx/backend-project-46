/* eslint-disable no-undef */

import { fileURLToPath } from 'url';
import path from 'path';
import diff from '../src/index.js';
import { readTestFile } from '../src/tools.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

test('diff', () => {
  const stylishInJSON = diff(path.resolve(dirname, '../__fixtures__/file1.json'), path.resolve(dirname, '../__fixtures__/file2.json'), 'stylish');
  const stylishInYAML = diff(path.resolve(dirname, '../__fixtures__/file1.yml'), path.resolve(dirname, '../__fixtures__/file2.yaml'), 'stylish');
  expect(stylishInJSON).toEqual(readTestFile('../__fixtures__/expectedStylish.txt'));
  expect(stylishInYAML).toEqual(readTestFile('../__fixtures__/expectedStylish.txt'));

  const plainInJSON = diff(path.resolve(dirname, '../__fixtures__/file1.json'), path.resolve(dirname, '../__fixtures__/file2.json'), 'plain');
  const plainInYAML = diff(path.resolve(dirname, '../__fixtures__/file1.yml'), path.resolve(dirname, '../__fixtures__/file2.yaml'), 'plain');
  expect(plainInJSON).toEqual(readTestFile('../__fixtures__/expectedPlain.txt'));
  expect(plainInYAML).toEqual(readTestFile('../__fixtures__/expectedPlain.txt'));

  const jsonInJSON = diff(path.resolve(dirname, '../__fixtures__/file1.json'), path.resolve(dirname, '../__fixtures__/file2.json'), 'json');
  const jsonInYAML = diff(path.resolve(dirname, '../__fixtures__/file1.yml'), path.resolve(dirname, '../__fixtures__/file2.yaml'), 'json');
  expect(jsonInJSON).toEqual(readTestFile('../__fixtures__/expectedJSON.txt'));
  expect(jsonInYAML).toEqual(readTestFile('../__fixtures__/expectedJSON.txt'));
});
