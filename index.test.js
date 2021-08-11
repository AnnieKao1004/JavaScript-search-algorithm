const search = require("./index");
const utils = require("./utils");

describe("search algorithm", () => {
  const searchArray = utils.generateRandomArray(3000);
  const sortedArray = searchArray.sort((a, b) => a - b);
  const find = utils.getRandomElementInArray(searchArray);
  const index = utils.defaultSearch(searchArray, find);

  it("linear search", () => {
    expect(index).toEqual(search.linearSearch(searchArray, find));
  });

  it("binary search", () => {
    expect(utils.defaultSearch(sortedArray, find)).toEqual(
      search.binarySearch(sortedArray, find)
    );
  });
});
