import path from 'path';
import * as fs from 'fs';

export const getFileFormat = (filepath) => path.extname(filepath).split('.')[1];

export const formatPaths = (filepaths) => path.resolve(process.cwd(), ...filepaths);

export const readFile = (filepaths) => fs.readFileSync(formatPaths(filepaths), 'utf8');
