/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  if (s == "" || n == 0) {
    return 0;
  }
  const aCount = s.split("").filter((s) => s === "a").length;
  const mult = Math.floor(n / s.length);
  const re = n % s.length;
  const sSlice = s.slice(0, re);
  const result =
    aCount * mult + sSlice.split("").filter((s) => s === "a").length;
  return result;
}

// test cases
console.log(repeatedString("aba", 10)); // aba aba aba a => 7
console.log(repeatedString("a", 1000000000000)); // a x 1000000000000 => 1000000000000
