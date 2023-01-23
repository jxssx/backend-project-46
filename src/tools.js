import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

export const getFileFormat = (filepath) => path.extname(filepath).split('.')[1];

export const formatPaths = (...filepaths) => path.resolve(process.cwd(), ...filepaths);

export const readTestFile = (...filepaths) => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const testsDirPath = `${dirname}/../__tests__`;
  const pathToFile = path.resolve(testsDirPath, ...filepaths);
  return fs.readFileSync(pathToFile, 'utf8');
};

export const readFile = (...filepaths) => fs.readFileSync(formatPaths(...filepaths), 'utf8');
