const {getArgument} = require('../../src/getArgument.js');

let authorization = getArgument("--auth", process.argv);
fetch("https://api.spotify.com/v1/me/player/devices", {
    headers: {
        "Authorization": authorization
    }
})
    .then(response => response.json())
    .then(data => {
        data.devices.forEach((element, index) => {
            console.log(`${index + 1} | ${element.name} (${element.id})`)
            console.log(`  | Volume: ${element.volume_percent}% | ${element.is_active ? "Active" : "Inactive"}`)
        });
    })
    .catch(error => console.error(error));