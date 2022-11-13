import _ from 'lodash';

const genDiffJSON = (file1, file2) => {
  const unitedKeys = _.union(_.keys(file1), _.keys(file2));
  const data = _.uniq(_.sortBy(unitedKeys));
  const result = data.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.has(file1, key) && _.has(file2, key)) {
      if (value1 === value2) {
        return `  ${key}: ${value1}`;
      }
      return [`  -${key}: ${value1}`, `  +${key}: ${value2}`];
    }
    if (_.has(file1, key)) {
      return `  -${key}: ${value1}`;
    }
    return `  +${key}: ${value2}`;
  });
  return result.flat();
};

export default genDiffJSON;
