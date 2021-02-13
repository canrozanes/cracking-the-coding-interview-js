export function binarySearch(array: any[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    const midValue = array[mid];

    if (midValue === target) {
      return mid;
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
