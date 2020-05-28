exports.sum = (x, y) => x + y;
exports.sub = (x, y) => x - y;
exports.multi = (x, y) => x * y;

exports.prepareString = (str) => {
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
};
