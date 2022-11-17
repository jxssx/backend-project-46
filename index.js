import parse from './src/parsers.js';
import { readFile, getExt } from './src/tools.js';
import format from './src/formatters/index.js';
import genDiff from './src/difference.js';

const diff = (filepath1, filepath2, outputFormat) => {
  const file1 = parse(readFile([filepath1]), getExt(filepath1));
  const file2 = parse(readFile([filepath2]), getExt(filepath2));
  const difference = genDiff(file1, file2);
  return format(difference, outputFormat);
};

export default diff;
