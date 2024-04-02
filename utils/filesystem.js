const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readAndAppend = util.promisify(fs.appendFile);

module.exports = {readFromFile, writeFile, readAndAppend};