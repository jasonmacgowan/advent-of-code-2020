const fs = require("fs");
const path = require("path");

/**
 * Finds the three entries in day-2.txt that sum to 2020, then
 * spits out the product.
 */
function main() {
  // read our input data
  const data = fs.readFileSync(
    path.join(__dirname, "..", "inputs", "day-2.txt"),
    "utf-8"
  );

  // split input by lines and covert to an integer so we can do math
  const entries = data.split(/\r?\n/).map((x) => parseInt(x, 10));

  let i, j, k, x, y, z, result;
  outer: for (i = 0; i < entries.length; i++) {
    for (j = 0; j < entries.length; j++) {
      for (k = 0; k < entries.length; k++) {
        // skip entries in the same position
        if (i === j || i === k || j === k) continue;

        x = entries[i];
        y = entries[j];
        z = entries[k];

        if (x + y + z === 2020) {
          result = x * y * z;

          // we've found what we're after, exit all loops
          break outer;
        }
      }
    }
  }

  if (result === undefined) {
    throw new Error("unable to find entries that sum to 2020.");
  }

  // report what we've found to the console
  console.log(`Entries are ${x.toString()}, ${y.toString()}, ${z.toString()}`);
  console.log(`Product is ${result.toString()}`);
}

if (require.main === module) {
  main();
}
