const fs = require("fs");
const path = require("path");

/**
 * Grab all the data from a file in `inputs`
 *
 * @param {String} name the filename to grab
 * @returns {String} the contents of the file
 */
exports.getInput = function getInput(name) {
  return fs.readFileSync(path.join(__dirname, "..", "inputs", name), "utf-8");
};
