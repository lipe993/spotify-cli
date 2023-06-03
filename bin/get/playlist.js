const {getArgument} = require('../../src/getArgument.js');

let playlist = process.argv[2];
let authorization = getArgument("--auth", process.argv);
fetch(`https://api.spotify.com/v1/playlists/${playlist}`, {
    headers: {
        "Authorization": authorization
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(`${data.name} by ${data.owner.display_name} (${data.id})`);
        console.log(`${data.tracks.total} songs`);
        console.log("----------------------------------------------------")
        data.tracks.items.forEach((element, index) => {
            element = element.track;
            // console.log(element);
            var artists = "";
            element.artists.forEach((value, index) => {
                artists += value.name;
                if(index != element.artists.length - 1) {
                    artists += ", ";
                }
            });
            console.log(`${index + 1} | ${element.name} by ${artists} (${element.id})`)
        });
    })
    .catch(error => console.error(error))