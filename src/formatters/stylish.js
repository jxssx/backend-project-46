import _ from "lodash";

const prefixes = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const openingSymbol = '{';
const closingSymbol = '}';
const indent = ' ';
const keyOffset = 4;
const prefixOffset = 2;

const addPrefix = (key, value, type, keyIndent) => `${keyIndent}${prefixes[type]} ${key}: ${value}`;

const toStr = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indentSize = keyOffset * depth;
  const keyIndent = indent.repeat(indentSize);
  const bracketIndent = indent.repeat(indentSize - keyOffset);
  const data = Object.entries(value).flatMap(([key, val]) => `${keyIndent}${key}: ${toStr(val, depth + 1)}`);
  return [openingSymbol, ...data, `${bracketIndent}${closingSymbol}`].join('\n');
};

const formatDefault = (tree) => {
  const iter = (data, depth) => {
    const indentSize = depth * keyOffset;
    const keyIndent = indent.repeat(indentSize - prefixOffset);
    const bracketIndent = indent.repeat(indentSize - keyOffset);
    const formattedData = data.map((elem) => {
      if (elem.type !== 'nested') {
        return addPrefix(elem.key, toStr(elem.value, depth + 1), elem.type, keyIndent);
      }
      return addPrefix(elem.key, iter(elem.children, depth + 1), elem.type, keyIndent);
    });
    return [openingSymbol, ...formattedData, `${bracketIndent}${closingSymbol}`].join('\n');
  };
  return iter(tree, 1);
};

export default formatDefault;
