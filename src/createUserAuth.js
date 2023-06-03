const express = require("express")
const { exec } = require('child_process');
// const open = async () => await import("open");

module.exports = (client_id, client_secret, port = 8080) => {
    const app = express();
    app.get("/", (req, res) => {
        res.redirect("https://accounts.spotify.com/authorize?" + new URLSearchParams({
            client_id: client_id,
            response_type: 'code',
            redirect_uri: `http://localhost:${port}/callback`,
            scope: 'user-top-read, user-read-playback-state, user-modify-playback-state'
        }))
    });
    var server = app.listen(port, () => {
        exec(`sudo python3 -c "import webbrowser; webbrowser.open('http://localhost:${port}')"`)
    });
    app.get("/callback", (req, res) => {
        fetch("https://accounts.spotify.com/api/token?" + new URLSearchParams({
                grant_type: "authorization_code",
                code: req.query.code,
                redirect_uri: `http://localhost:${port}/callback`,
            }),
            {
                method: "POST",
                headers: {
                    'Authorization': "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        )
            .then(response => response.json())
            .then(data => {
                var authorization = `${data.token_type} ${data.access_token}`;
                console.log(authorization);
                res.send("Finished, you may now close this page");
                server.close();
            })
            .catch(error => console.error(error));
    });
}