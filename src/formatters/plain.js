import _ from 'lodash';

const simplify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatNestedKeys = (parent) => parent.children.flatMap((child) => {
  const childCopy = _.cloneDeep(child);
  childCopy.key = `${parent.key}.${child.key}`;
  if (child.type === 'nested') {
    return formatNestedKeys(childCopy);
  }
  return childCopy;
});

const formatPlain = (data) => {
  const formatted = data.flatMap((elem) => {
    switch (elem.type) {
      case 'removed':
        return `Property '${elem.key}' was removed`;
      case 'added':
        return `Property '${elem.key}' was added with value: ${simplify(elem.value)}`;
      case 'updated':
        return `Property '${elem.key}' was updated. From ${simplify(elem.removed.value)} to ${simplify(elem.added.value)}`;
      case 'unchanged':
        return [];
      case 'nested':
        return formatPlain(formatNestedKeys(elem));
      default:
        return `Unexpected element type '${elem.type}'`;
    }
  });
  return formatted.join('\n');
};

export default formatPlain;
