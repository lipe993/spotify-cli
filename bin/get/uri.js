const {getArgument} = require('../../src/getArgument.js');

let id = getArgument("--id", process.argv);
let type = getArgument("--type", process.argv).replace("--", "");

console.log(`spotify:${type}:${id}`)