import path from 'path';
import * as fs from 'fs';

const getExtension = (filepath) => {
  const split = filepath.split('/');
  const [, ext] = split[-1].split('.');
  return ext;
};

const formatPath = (filepath) => path.resolve(filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

export { getExtension, formatPath, readFile };
