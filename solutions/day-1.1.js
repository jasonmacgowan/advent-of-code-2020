const { getInput } = require("../utils");

/**
 * Finds the two entries in day-1.txt that sum to 2020, then
 * spits out the product.
 */
function main() {
  // read our input data
  const data = getInput("day-2.txt");

  // split input by lines and covert to an integer so we can do math
  const entries = data.split(/\r?\n/).map((x) => parseInt(x, 10));

  let i, j, x, y, result;
  outer: for (i = 0; i < entries.length; i++) {
    for (j = 0; j < entries.length; j++) {
      // skip entries in the same position
      if (i === j) continue;

      x = entries[i];
      y = entries[j];

      if (x + y === 2020) {
        result = x * y;

        // we've found what we're after, exit all loops
        break outer;
      }
    }
  }

  if (result === undefined) {
    throw new Error("unable to find entries that sum to 2020.");
  }

  // report what we've found to the console
  console.log(`Entries are ${x.toString()}, ${y.toString()}`);
  console.log(`Product is ${result.toString()}`);
}

if (require.main === module) {
  main();
}
