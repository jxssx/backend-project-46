import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

export const getExt = (filepath) => path.extname(filepath);
export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const formatPaths = (filepaths) => path.resolve(dirname, '..', ...filepaths);

export const readFile = (filepaths) => fs.readFileSync(formatPaths(filepaths), 'utf8');
