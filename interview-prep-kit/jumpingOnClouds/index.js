function jumpingOnClouds(c) {
  let steps = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] != 1) {
      i += 2;
    } else {
      i += 1;
    }
    steps += 1;
  }
  return steps;
}

// test cases
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])); // 3
