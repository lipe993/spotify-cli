const {getArgument} = require('../../src/getArgument.js');

let authorization = getArgument("--auth", process.argv);
fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
        'Authorization': authorization,      
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(`Playing | ${data.item.name}${data.item.explicit ? " [E]" : ""} by ${data.item.artists[0].name} (${data.item.id})`);
        console.log(`        | from ${data.item.album.name} (${data.item.album.id})`);
        if(data.context !== undefined) console.log(`        | Context: ${data.context.uri}`);
    })
    .catch(error => console.log(error));