const {getArgument} = require('../src/getArgument.js');

let authorization = getArgument("--auth", process.argv);
let uri = process.argv[2];
let device_id = getArgument("--device", process.argv)
fetch("https://api.spotify.com/v1/me/player/play?" + new URLSearchParams({
    device_id: device_id
}), {
    method: "PUT",
    headers: {
        'Authorization': authorization,
        "Accept": "application/json",
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        uris: [uri],
        position_ms: 0
    })
})
    .catch(error => console.error(error));