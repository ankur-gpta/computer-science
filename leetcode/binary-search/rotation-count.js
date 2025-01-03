// find out how many times array was rotated? A sorted array is given. there will be no duplicates.
// basically finding the min element in the array.
// Array is circularly sorted
function countRotation(arr) {
  let N = arr.length;
  let low = 0;
  let high = N - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    const next = (mid + 1) % N;
    const prev = (mid + N - 1) % N;
    if (arr[low] <= arr[high]) return low;
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }
    if (arr[mid] <= arr[high]) {
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(countRotation([11, 12, 15, 18, 2, 5, 6, 8]));
