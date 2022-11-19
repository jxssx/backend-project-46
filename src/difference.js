import _ from 'lodash';

const genDiff = (file1, file2) => {
  const data = _.uniq(_.sortBy(_.union(_.keys(file1), _.keys(file2))));
  const result = data.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.has(file1, key) && _.has(file2, key)) {
      if (value1 === value2) {
        return { key, value: value1, type: 'unchanged' };
      }
      if (_.isObject(value1) && _.isObject(value2)) {
        return { key, children: genDiff(value1, value2), type: 'nested' };
      }
      return {
        key, removed: { value: value1, type: 'removed' }, added: { value: value2, type: 'added' }, type: 'updated',
      };
    }
    if (_.has(file1, key)) {
      return { key, value: value1, type: 'removed' };
    }
    return { key, value: value2, type: 'added' };
  });
  return result;
};

export default genDiff;
