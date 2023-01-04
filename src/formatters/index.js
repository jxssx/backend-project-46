import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatJSON = (data) => JSON.stringify(data, null, 2);

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return formatJSON(data);
    default: throw new Error(`Unexpected output format "${format}"`);
  }
};
