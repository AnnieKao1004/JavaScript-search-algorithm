exports.generateRandomArray = (count) => {
  const max = 1e7;
  const result = [];
  while (count--) {
    result[count] = Math.floor(Math.random() * max);
  }
  return result;
};

exports.getRandomElementInArray = (arr) => {
  const length = arr.length;
  const index = Math.ceil(Math.random() * length);
  return arr[index];
};
// === Another method ===
// exports.generateRandomArray = (count) => {
//   const max = 1e7;
//   return Array.prototype.constructor
//     .apply(null, Array(count))
//     .map(Math.random)
//     .map((item) => item * max)
//     .map(Math.floor);
// };

exports.defaultSearch = (arr, find) => {
  return arr.indexOf(find);
};
