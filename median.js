function findMedian(arr) {
  const sorted = arr.sort();
  console.log(sorted);
  console.log(sorted.length);
  console.log("index: " + Math.floor(arr.length / 2));
  return sorted[Math.floor(arr.length / 2)];
}

console.log(`median: ${findMedian([1, 2, 3, 4, 3, 4, 5, 3, 5, 2, 4])}`);
