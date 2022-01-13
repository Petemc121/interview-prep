//  iterate through A, for each iteration iterate through B. If A[i] + B[i] > K, A'[i] === A[i] and same for B.
//  if less than K iterate through B until find value that makes A[i] + B[i] greater than K. A shouldn't have to change order.

function twoArrays(k, A, B) {
  function compareup(a, b) {
    if (a <= b) {
      return -1;
    }
    if (a >= b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  function comparedown(a, b) {
    if (a >= b) {
      return -1;
    }
    if (a <= b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const sortedA = A.sort(compareup);
  const sortedB = B.sort(comparedown);

  console.log(sortedA, sortedB);

  if (sortedA.every((value, index) => value + sortedB[index] >= k) === true) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
