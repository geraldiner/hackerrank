function sockMerchant(n, ar) {
  let sockSet = new Set(ar);
  let pairs = 0;
  for (const sock of sockSet) {
    pairs += Math.floor(ar.filter((s) => s === sock).length / 2);
  }
  return pairs;
}

// test cases

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 40, 10, 20])); // 3
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4
