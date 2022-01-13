function sockMerchant(n, ar) {
  const nonRepeatingArray = [...new Set(ar)];
  let pairs = 0;

  nonRepeatingArray.forEach((nonRepeatingArrayValue) => {
    let instances = 0;
    ar.forEach((arValue) => {
      arValue === nonRepeatingArrayValue ? instances++ : instances;
    });

    pairs += Math.floor(instances / 2);
  });

  console.log(pairs);
}

//give the total number of sock pairs

sockMerchant(8, [1, 2, 1, 1, 2, 3]);
