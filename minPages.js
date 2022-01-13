function pageCount(n, p) {
  let pageTurnsFromBeginning = Math.floor(p / 2);
  let pageTurnsFromEnd = 0;

  if ((n % 2 !== 0 && p % 2 !== 0) || (n % 2 === 0 && p % 2 === 0)) {
    pageTurnsFromEnd = (n - p) / 2;
  } else if (n % 2 === 0 && p % 2 !== 0) {
    pageTurnsFromEnd = Math.round((n - p) / 2);
  } else {
    pageTurnsFromEnd = Math.floor((n - p) / 2);
  }

  if (pageTurnsFromBeginning < pageTurnsFromEnd) {
    return pageTurnsFromBeginning;
  }

  if (pageTurnsFromBeginning > pageTurnsFromEnd) {
    return pageTurnsFromEnd;
  }

  return pageTurnsFromEnd;
}

console.log(pageCount(6, 4));

//find the minimum number of page turns to turn to get to a certain page in a book
