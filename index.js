exports.linearSearch = (arr, target) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// binary search in a sorted array
exports.binarySearch = (arr, target) => {
  const length = arr.length;
  let low = 0;
  let high = length - 1;

  while (high >= low) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// Find the last element, whose value is less than target, in a sorted array
const binarySearch_lowerBound = (arr, target) => {
  let high = arr.length - 1;
  let low = 0;
  if (arr[0] >= target) {
    return -1;
  }

  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] <= target) {
      low = mid;
    }
  }

  return low;
};
