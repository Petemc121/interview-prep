function birthday(s, d, m) {
  let segments = [];
  s.forEach((value, index) => {
    let segSum = 0;
    let seg = [];
    for (let i = 0; i < m; i++) {
      seg.push(s[index + i]);
      segSum += s[index + i];
    }

    segSum === d && segments.push(seg);
  });

  return segments.length;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));

// find segments summing to days whose length = month. return number of segments.
