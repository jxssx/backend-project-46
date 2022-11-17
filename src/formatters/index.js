import formatStylish from './stylish.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    default: throw new Error(`Unexpected output format "${format}"`);
  }
};
