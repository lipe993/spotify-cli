const createUserAuth = require('./createUserAuth.js')

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

// Do a foreach loop again, this time to find if we need the user or not
process.argv.forEach(element => {
    if(element == "--no-user" || element == "--anonymous") {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: client_id,
                client_secret: client_secret
            })
        })
            .then(response => response.json())
            .then(data => {
                var authorization = `${data.token_type} ${data.access_token}`;
                console.log(authorization);
            })
            .catch(error => console.error(error));
    } else if(element == "--user") {
        createUserAuth(client_id, client_secret)
    }
});