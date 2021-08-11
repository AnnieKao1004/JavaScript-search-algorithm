const search = require("./index");
const utils = require("./utils");

const speedTest = (function () {
  let _time = 0;
  let _name = "";

  return {
    start: (name) => {
      _time = new Date();
      _name = name;
    },
    end: (times) => {
      console.log(`${_name}: ${Math.floor(new Date() - _time)} ms`);
    },
  };
})();

const runTest = (func, times) => {
  const searchArray = utils.generateRandomArray(3000);
  const sortedArray = searchArray.sort((a, b) => a - b);
  const find = utils.getRandomElementInArray(searchArray);
  for (let i = 0; i < times; i++) {
    func(sortedArray, find);
  }
  return;
};

const types = ["linearSearch", "binarySearch"];
for (let i = 0; i < types.length; i++) {
  speedTest.start(types[i]);
  runTest(search[types[i]], 10000);
  speedTest.end(10000);
}
