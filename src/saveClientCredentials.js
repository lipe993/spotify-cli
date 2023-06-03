var client_id;
var client_secret;
process.argv.forEach((element, index, array) => {
    if(element == "--id") {
        client_id = array[index + 1];
    }
    if(element == "--secret") {
        client_secret = array[index + 1];
    }
});

console.log(JSON.stringify({client_id, client_secret}))