/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER that represents the number of valleys
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "U" && altitude == -1) {
      valleys += 1;
      altitude += 1;
    } else if (path[i] == "D") {
      altitude -= 1;
    } else {
      // path[i] == "U"
      altitude += 1;
    }
  }
  return valleys;
}

console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"])); // 1
console.log(countingValleys(12, ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"])); // 2
