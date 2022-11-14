const prefixes = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
};

const formatDefault = (data) => {
  const indent = '  ';
  const prefixKeyIndent = ' ';
  const formattedData = data.map((elem) => `${indent}${prefixes[elem.type]}${prefixKeyIndent}${elem.key}: ${elem.value}`);
  const openingSymbol = '{';
  const closingSymbol = '}';
  return [openingSymbol, ...formattedData, closingSymbol].join('\n');
};

export default formatDefault;
