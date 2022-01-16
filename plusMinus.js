function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;

  arr.forEach((value) => {
    if (value > 0) {
      plus++;
    } else if (value < 0) {
      minus++;
    } else {
      zero++;
    }
  });

  const plusDecimal = (plus / arr.length).toFixed(6);
  const minusDecimal = (minus / arr.length).toFixed(6);
  const zeroDecimal = (zero / arr.length).toFixed(6);

  console.log(
    `${plusDecimal}
${minusDecimal}
${zeroDecimal}`
  );
}

plusMinus([1, 1, 0, 0, -2, -2, -2]);
