import parse from './parsers.js';
import { readFile, getExt } from './tools.js';
import format from './formatters/index.js';
import genDiff from './difference.js';

const diff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const file1 = parse(readFile([filepath1]), getExt(filepath1));
  const file2 = parse(readFile([filepath2]), getExt(filepath2));
  const difference = genDiff(file1, file2);
  return format(difference, outputFormat);
};

export default diff;
