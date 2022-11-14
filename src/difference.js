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
      return [{ key, value: value1, type: 'deleted' }, { key, value: value2, type: 'added' }];
    }
    if (_.has(file1, key)) {
      return { key, value: value1, type: 'deleted' };
    }
    return { key, value: value2, type: 'added' };
  });
  return result.flat();
};

export default genDiff;
