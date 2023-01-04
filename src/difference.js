import _ from 'lodash';

const genDiff = (file1, file2) => {
  const data = _.uniq(_.sortBy(_.union(_.keys(file1), _.keys(file2))));
  const result = data.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.has(file1, key) && _.has(file2, key)) {
      if (value1 === value2) {
        return { type: 'unchanged', key, value: value1 };
      }
      if (_.isObject(value1) && _.isObject(value2)) {
        return { type: 'nested', key, children: genDiff(value1, value2) };
      }
      return {
        type: 'updated', key, removed: value1, added: value2,
      };
    }
    if (_.has(file1, key)) {
      return { type: 'removed', key, value: value1 };
    }
    return { type: 'added', key, value: value2 };
  });
  return result;
};

export default genDiff;
