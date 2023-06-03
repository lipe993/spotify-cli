const {getArgument} = require("./getArgument");

process.stdin.on("data", data => {
    data = data.toString().replace("\n", "").split(" ")
    if(getArgument("-b", process.argv, false) || getArgument("--boolean", process.argv, false)) {
        console.log(getArgument(process.argv[2], data, false) === undefined ? false : true);
    } else {
        console.log(getArgument(process.argv[2], data));
    }
});