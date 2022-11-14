import { readFile } from './src/tools.js';
import formatDefault from './src/formatters/default.js';
import genDiff from './src/difference.js';

const diff = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFile([filepath1], 'utf8'));
  const file2 = JSON.parse(readFile([filepath2], 'utf8'));
  const difference = genDiff(file1, file2);
  return formatDefault(difference);
};

export default diff;
