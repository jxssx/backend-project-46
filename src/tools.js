import path from 'path';

const getExtension = (filepath) => {
  const split = filepath.split('/');
  const [, ext] = split[-1].split('.');
  return ext;
};

const formatPath = (filepath) => path.resolve(filepath);

export { getExtension, formatPath };
