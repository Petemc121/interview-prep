//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sumArray = [];
  arr.forEach((element, index1) => {
    const sumExcludingElement = arr.reduce((acc, value, index2) => {
      if (index1 === index2) {
        return (acc = acc);
      } else {
        return (acc += value);
      }
    }, 0);
    sumArray.push(sumExcludingElement);
  });

  const sorted = sumArray.sort();

  console.log(`${sorted[0]} ${sorted[4]}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
