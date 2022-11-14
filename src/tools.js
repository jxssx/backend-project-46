import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

export const getExtension = (filepath) => {
  const split = filepath.split('/');
  const [, ext] = split[-1].split('.');
  return ext;
};

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const formatPaths = (filepaths) => path.resolve(dirname, '..', ...filepaths);

export const readFile = (filepaths) => fs.readFileSync(formatPaths(filepaths), 'utf8');
