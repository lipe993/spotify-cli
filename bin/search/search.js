const {getArgument} = require('../../src/getArgument.js');

let authorization = getArgument("--auth", process.argv);
let query = getArgument("-q", process.argv);
let type = process.argv[2].replace("--", "");
fetch(`https://api.spotify.com/v1/search?` + new URLSearchParams({
    q: query,
    type: type
}), {
    headers: {
        'Authorization': authorization
    }
})
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(item => {
            data[item].items.forEach((element, index) => {
                console.log(`${index + 1} | ${element.name}` + 
                    (element.artists == undefined ? "" : ` by ${element.artists[0].name}`) +
                    (element.owner == undefined ? "" : ` by ${element.owner.display_name}`) +
                    ` (${element.id})`
                )
            })
        })
    })
    .catch(error => console.error(error));