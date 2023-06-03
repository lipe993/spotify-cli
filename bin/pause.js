const {getArgument} = require('../src/getArgument.js');

let authorization = getArgument("--auth", process.argv);
let device_id = getArgument("--device", process.argv);
let url = "https://api.spotify.com/v1/me/player/pause";
if(device_id != "undefined") url += "?" + new URLSearchParams({device_id});

fetch(url, {
    method: "PUT",
    headers: {
        'Authorization': authorization
    }
})
    .catch(error => console.error(error))