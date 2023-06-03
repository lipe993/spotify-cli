function getArgument(argument, argv, returnNext = true) {
    var auth;
    argv.forEach((element, index, array) => {
        if(element == argument) {
            if(returnNext) {
                auth = array[index + 1];
            } else {
                auth = true;
            }
        }
    });
    return auth;
}

module.exports = {getArgument};