import parse from './parsers.js';
import { readFile, getFileFormat } from './tools.js';
import format from './formatters/index.js';
import genDiff from './difference.js';

const diff = (filepath1, filepath2, outputFormat = 'stylish', test = false) => {
  const file1 = parse(readFile(test, filepath1), getFileFormat(filepath1));
  const file2 = parse(readFile(test, filepath2), getFileFormat(filepath2));
  const difference = genDiff(file1, file2);
  return format(difference, outputFormat);
};

export default diff;
